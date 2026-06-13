# Extract plain text from all Brandschutz Handlungsvorlagen HTML files
$root = "C:\Users\akork\OneDrive\H&S+\3. Handlungsvorlagen\Brandschutz"
$outDir = Join-Path $PSScriptRoot "..\docs\handlungsvorlagen-brandschutz"
$textDir = Join-Path $outDir "text"
New-Item -ItemType Directory -Force -Path $textDir | Out-Null

function Get-PlainTextFromHtml([string]$html) {
    $t = $html -replace '(?is)<script[^>]*>.*?</script>', ' '
    $t = $t -replace '(?is)<style[^>]*>.*?</style>', ' '
    $t = $t -replace '(?is)<br\s*/?>', "`n"
    $t = $t -replace '(?is)</p>', "`n"
    $t = $t -replace '(?is)</div>', "`n"
    $t = $t -replace '(?is)</h[1-6]>', "`n"
    $t = $t -replace '(?is)<[^>]+>', ' '
    $t = [System.Net.WebUtility]::HtmlDecode($t)
    $t = $t -replace '\s+', ' '
    return $t.Trim()
}

function Get-TitleFromHtml([string]$html) {
    if ($html -match '(?is)<title[^>]*>(.*?)</title>') { return ($Matches[1] -replace '\s+', ' ').Trim() }
    if ($html -match '(?is)<h1[^>]*>(.*?)</h1>') { return ($Matches[1] -replace '<[^>]+>', '' -replace '\s+', ' ').Trim() }
    return ''
}

$files = Get-ChildItem -LiteralPath $root -Recurse -File -Force |
    Where-Object { $_.Extension -match '^\.html?$' } |
    Sort-Object FullName

$index = @()
foreach ($f in $files) {
    $rel = $f.FullName.Substring($root.Length).TrimStart('\')
    $safeName = ($rel -replace '[\\/:*?"<>|]', '_')
    try {
        $html = Get-Content -LiteralPath $f.FullName -Raw -Encoding UTF8 -ErrorAction Stop
    } catch {
        $html = Get-Content -LiteralPath $f.FullName -Raw -Encoding Default -ErrorAction Stop
    }
    $title = Get-TitleFromHtml $html
    $text = Get-PlainTextFromHtml $html
    $outFile = Join-Path $textDir ($safeName + '.txt')
    Set-Content -LiteralPath $outFile -Value $text -Encoding UTF8
    $index += [PSCustomObject]@{
        relPath   = $rel
        title     = $title
        chars     = $text.Length
        words     = ($text -split '\s+' | Where-Object { $_ }).Count
        textFile  = "text/$safeName.txt"
        isKiWissen = $rel -match '_KI_WISSEN'
    }
}

$index | Export-Csv -Path (Join-Path $outDir "index.csv") -NoTypeInformation -Encoding UTF8
$md = @("# Handlungsvorlagen Brandschutz - HTML-Inventar ($($files.Count) Dateien)", "", "| Datei | Titel | Woerter | Typ |", "|-------|-------|--------|-----|")
foreach ($i in $index) {
    $typ = if ($i.isKiWissen) { 'KI-Wissen' } else { 'Dokument' }
    $t = ($i.title -replace '\|', '/') -replace '\r?\n', ' '
    if ($t.Length -gt 80) { $t = $t.Substring(0, 77) + '...' }
    $md += "| ``$($i.relPath)`` | $t | $($i.words) | $typ |"
}
Set-Content -Path (Join-Path $outDir "INDEX.md") -Value ($md -join "`n") -Encoding UTF8
Write-Host "Extracted $($files.Count) files to $outDir"
