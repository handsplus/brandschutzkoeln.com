param(
    [string]$Folder = "C:\Users\akork\OneDrive\Desktop\Neuer Ordner"
)

Add-Type -AssemblyName System.IO.Compression.FileSystem

function Get-XlsxRows {
    param([string]$Path)

    $zip = [System.IO.Compression.ZipFile]::OpenRead($Path)
    try {
        $shared = @()
        $sharedEntry = $zip.Entries | Where-Object { $_.FullName -eq "xl/sharedStrings.xml" }
        if ($sharedEntry) {
            $stream = $sharedEntry.Open()
            $reader = New-Object System.IO.StreamReader($stream)
            $xml = [xml]$reader.ReadToEnd()
            $reader.Close()
            $ns = New-Object System.Xml.XmlNamespaceManager($xml.NameTable)
            $ns.AddNamespace("m", "http://schemas.openxmlformats.org/spreadsheetml/2006/main")
            foreach ($si in $xml.SelectNodes("//m:si", $ns)) {
                $parts = $si.SelectNodes(".//m:t", $ns) | ForEach-Object { $_.'#text' }
                $shared += ($parts -join "")
            }
        }

        $sheetEntry = $zip.Entries | Where-Object { $_.FullName -eq "xl/worksheets/sheet1.xml" } | Select-Object -First 1
        if (-not $sheetEntry) { return @() }

        $stream = $sheetEntry.Open()
        $reader = New-Object System.IO.StreamReader($stream)
        $xml = [xml]$reader.ReadToEnd()
        $reader.Close()

        $ns = New-Object System.Xml.XmlNamespaceManager($xml.NameTable)
        $ns.AddNamespace("m", "http://schemas.openxmlformats.org/spreadsheetml/2006/main")

        $rows = @()
        foreach ($row in $xml.SelectNodes("//m:sheetData/m:row", $ns)) {
            $cells = @()
            foreach ($c in $row.SelectNodes("m:c", $ns)) {
                $vNode = $c.SelectSingleNode("m:v", $ns)
                if (-not $vNode) {
                    $cells += ""
                    continue
                }
                $val = $vNode.'#text'
                if ($c.t -eq "s") {
                    $idx = [int]$val
                    if ($idx -lt $shared.Count) { $val = $shared[$idx] }
                }
                $cells += $val
            }
            if ($cells | Where-Object { $_.ToString().Trim() -ne "" }) {
                $rows += ,@($cells)
            }
        }
        return $rows
    }
    finally {
        $zip.Dispose()
    }
}

$files = Get-ChildItem -Path $Folder -Filter "205-040_*.xlsx" | Sort-Object Name
foreach ($file in $files) {
    Write-Output ("=" * 80)
    Write-Output $file.Name
    $rows = Get-XlsxRows -Path $file.FullName
    $preview = [Math]::Min(30, $rows.Count)
    for ($i = 0; $i -lt $preview; $i++) {
        $line = ($rows[$i] | ForEach-Object { if ($null -eq $_) { "" } else { $_.ToString().Substring(0, [Math]::Min(100, $_.ToString().Length)) } }) -join " | "
        Write-Output $line
    }
    Write-Output "... total rows: $($rows.Count)"
}
