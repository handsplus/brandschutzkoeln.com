param(
    [string]$Folder = "C:\Users\akork\OneDrive\Desktop\Neuer Ordner",
    [string]$Out = "C:\Users\akork\OneDrive\H&S+\1. Verwaltung\3. Webseiten\brandschutzkoeln.com\docs\dguv-205-040-tabellen.json"
)

$ErrorActionPreference = "Stop"
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

Add-Type -AssemblyName System.IO.Compression.FileSystem

function Get-XlsxRows {
    param([string]$Path)
    $zip = [System.IO.Compression.ZipFile]::OpenRead($Path)
    try {
        $shared = @()
        $sharedEntry = $zip.Entries | Where-Object { $_.FullName -eq "xl/sharedStrings.xml" }
        if ($sharedEntry) {
            $stream = $sharedEntry.Open()
            $reader = New-Object System.IO.StreamReader($stream, [System.Text.Encoding]::UTF8)
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
        $reader = New-Object System.IO.StreamReader($stream, [System.Text.Encoding]::UTF8)
        $xml = [xml]$reader.ReadToEnd()
        $reader.Close()
        $ns = New-Object System.Xml.XmlNamespaceManager($xml.NameTable)
        $ns.AddNamespace("m", "http://schemas.openxmlformats.org/spreadsheetml/2006/main")
        $rows = @()
        foreach ($row in $xml.SelectNodes("//m:sheetData/m:row", $ns)) {
            $cells = @()
            foreach ($c in $row.SelectNodes("m:c", $ns)) {
                $vNode = $c.SelectSingleNode("m:v", $ns)
                if (-not $vNode) { $cells += ""; continue }
                $val = $vNode.'#text'
                if ($c.t -eq "s") {
                    $idx = [int]$val
                    if ($idx -lt $shared.Count) { $val = $shared[$idx] }
                }
                $cells += $val
            }
            if ($cells | Where-Object { $_.ToString().Trim() -ne "" }) { $rows += ,@($cells) }
        }
        return $rows
    }
    finally { $zip.Dispose() }
}

$result = @()
Get-ChildItem -Path $Folder -Filter "205-040_*.xlsx" | Sort-Object Name | ForEach-Object {
    $result += [ordered]@{
        file = $_.Name
        rows = @(Get-XlsxRows -Path $_.FullName)
    }
}

$json = $result | ConvertTo-Json -Depth 20
[System.IO.File]::WriteAllText($Out, $json, [System.Text.Encoding]::UTF8)
Write-Output "Wrote $($result.Count) files to $Out"
