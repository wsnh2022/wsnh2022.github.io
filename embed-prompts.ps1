# embed-prompts.ps1
# Reads data/my-prompts.md and writes data/my-collection.js.
# Run automatically by gitsync.bat before staging — no manual step needed.

$root   = $PSScriptRoot
$mdPath = Join-Path $root "data\my-prompts.md"
$jsPath = Join-Path $root "data\my-collection.js"

if (-not (Test-Path $mdPath)) { Write-Error "data/my-prompts.md not found"; exit 1 }

$js = & node -e @"
var fs = require('fs');
var md = fs.readFileSync('$($mdPath.Replace('\','\\'))', 'utf8');
process.stdout.write('var MY_PROMPTS_MD = ' + JSON.stringify(md) + ';\n');
"@

[System.IO.File]::WriteAllText($jsPath, $js, [System.Text.Encoding]::UTF8)
Write-Host "  Generated data/my-collection.js from data/my-prompts.md"
