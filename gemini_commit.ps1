$key  = [System.Environment]::GetEnvironmentVariable('GEMINI_API_KEY', 'User')
$diff = Get-Content "$env:TEMP\gdiff_tmp.txt" -Raw -Encoding UTF8

$prompt = @"
Write a single Git commit message. Max 72 characters.
Describe the exact content change shown in the diff.
Be specific: name the file and what was added, removed, or modified.
Do NOT describe the act of editing.
No explanation. No quotes. No punctuation at end.
Commit message only.

$diff
"@

$body = @{
    contents       = @(@{ parts = @(@{ text = $prompt }) })
    generationConfig = @{ maxOutputTokens = 80; temperature = 0 }
} | ConvertTo-Json -Depth 10

$r = Invoke-RestMethod `
    -Uri         "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=$key" `
    -Method      Post `
    -ContentType "application/json" `
    -Body        $body

$r.candidates[0].content.parts[0].text.Trim()
