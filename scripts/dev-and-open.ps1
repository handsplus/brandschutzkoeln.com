# Startet den Next.js Dev-Server und öffnet danach den Browser.
# Nutzt node direkt (npm schlägt bei Pfad mit "&" fehl).

$projectRoot = if ($PSScriptRoot) { $PSScriptRoot | Split-Path -Parent } else { Get-Location }
$nextBin = Join-Path $projectRoot "node_modules\next\dist\bin\next"

# Server in neuem Fenster starten (Port 3005)
$proc = Start-Process -FilePath "node" -ArgumentList $nextBin, "dev", "-p", "3005" -WorkingDirectory $projectRoot -PassThru

# Warten bis der Server bereit ist
$url = "http://localhost:3005"
$maxAttempts = 20
for ($i = 0; $i -lt $maxAttempts; $i++) {
    try {
        Invoke-WebRequest -Uri $url -UseBasicParsing -TimeoutSec 2 -ErrorAction Stop | Out-Null
        break
    } catch {
        if ($i -eq $maxAttempts - 1) { $url = $null }
    }
    Start-Sleep -Milliseconds 500
}

if ($url) { Start-Process $url }
