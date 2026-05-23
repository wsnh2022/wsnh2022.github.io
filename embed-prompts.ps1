# embed-prompts.ps1
# Reads data/my-prompts.md and splices it into the inline data block in prompts.html.
# Run automatically by gitsync.bat before staging — no manual step needed.

$root     = $PSScriptRoot
$mdPath   = Join-Path $root "data\my-prompts.md"
$htmlPath = Join-Path $root "prompts.html"

if (-not (Test-Path $mdPath))   { Write-Error "data/my-prompts.md not found"; exit 1 }
if (-not (Test-Path $htmlPath)) { Write-Error "prompts.html not found";        exit 1 }

$md   = [System.IO.File]::ReadAllText($mdPath,  [System.Text.Encoding]::UTF8)
$html = [System.IO.File]::ReadAllText($htmlPath, [System.Text.Encoding]::UTF8)

$open  = '<script type="text/plain" id="my-prompts-raw">'
$close = '</script>'

$s = $html.IndexOf($open)
if ($s -lt 0) { Write-Error "Could not find my-prompts-raw marker in prompts.html"; exit 1 }

$bodyStart = $s + $open.Length
$e = $html.IndexOf($close, $bodyStart)
if ($e -lt 0) { Write-Error "Could not find closing </script> after my-prompts-raw"; exit 1 }

$newHtml = $html.Substring(0, $bodyStart) + "`n" + $md + $html.Substring($e)
[System.IO.File]::WriteAllText($htmlPath, $newHtml, [System.Text.Encoding]::UTF8)
Write-Host "  Embedded data/my-prompts.md into prompts.html"
