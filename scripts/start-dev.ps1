# Startet Next.js Dev-Server (Port 3005). Wird von "npm run dev" genutzt.
# Nutzt node direkt, da npm bei Pfad mit "&" (z. B. H&S+) fehlschlägt.

$projectRoot = if ($PSScriptRoot) { Split-Path $PSScriptRoot -Parent } else { Get-Location }
$nextBin = Join-Path $projectRoot "node_modules\next\dist\bin\next"

& node $nextBin dev -p 3005
