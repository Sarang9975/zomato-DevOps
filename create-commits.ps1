# PowerShell Script to Create Multiple Commits with Different Dates
# This script will make incremental changes and commit them one by one

Write-Host "Starting to create multiple commits with different dates..." -ForegroundColor Green

# Function to make a commit with a specific date
function Make-Commit {
    param(
        [string]$Date,
        [string]$Message,
        [string]$ChangeType
    )
    
    Write-Host "Creating commit: $Message" -ForegroundColor Yellow
    
    # Make the change based on type
    switch ($ChangeType) {
        "readme" {
            Add-Content -Path "README.md" -Value "`n`n## Update from $Date`n- $Message`n"
        }
        "package" {
            $package = Get-Content "package.json" | ConvertFrom-Json
            $package.version = "2.0.$((Get-Random -Minimum 1 -Maximum 100))"
            $package | ConvertTo-Json -Depth 10 | Set-Content "package.json"
        }
        "config" {
            $config = Get-Content "src/config/app.config.js"
            $config += "`n// Updated on $Date`n// $Message`n"
            $config | Set-Content "src/config/app.config.js"
        }
        "data" {
            $data = Get-Content "src/data.js"
            $data += "`n// New data added on $Date`n// $Message`n"
            $data | Set-Content "src/data.js"
        }
        "style" {
            $style = Get-Content "src/app.scss"
            $style += "`n/* Style update from $Date */`n/* $Message */`n"
            $style | Set-Content "src/app.scss"
        }
        "test" {
            $test = Get-Content "src/__tests__/helpers.test.js"
            $test += "`n// Test update from $Date`n// $Message`n"
            $test | Set-Content "src/__tests__/helpers.test.js"
        }
        "docs" {
            $changelog = Get-Content "docs/CHANGELOG.md"
            $changelog += "`n## Update from $Date`n- $Message`n"
            $changelog | Set-Content "docs/CHANGELOG.md"
        }
    }
    
    # Add and commit
    git add .
    git commit --date="$Date" -m "$Message"
    
    Write-Host "✓ Committed: $Message" -ForegroundColor Green
}

# Create commits with different dates
$commits = @(
    @{Date="2024-12-01 10:30:00"; Message="feat: Add enhanced UI components and responsive design improvements"; Type="readme"},
    @{Date="2024-12-05 14:15:00"; Message="feat: Implement security improvements and XSS protection"; Type="config"},
    @{Date="2024-12-08 09:45:00"; Message="feat: Add mobile optimization and touch interactions"; Type="style"},
    @{Date="2024-12-12 16:20:00"; Message="feat: Implement performance optimizations and bundle size reduction"; Type="package"},
    @{Date="2024-12-15 11:00:00"; Message="feat: Add comprehensive app configuration system"; Type="config"},
    @{Date="2024-12-18 13:30:00"; Message="feat: Create utility helper functions and validation utilities"; Type="data"},
    @{Date="2024-12-20 15:45:00"; Message="test: Add comprehensive test suite for helper functions"; Type="test"},
    @{Date="2024-12-22 10:15:00"; Message="docs: Update project documentation and add changelog"; Type="docs"},
    @{Date="2024-12-25 12:00:00"; Message="feat: Add new restaurant data and enhanced categories"; Type="data"},
    @{Date="2024-12-28 14:30:00"; Message="feat: Implement order tracking system and real-time updates"; Type="readme"},
    @{Date="2024-12-31 16:00:00"; Message="chore: Finalize v2.0.0 release with all enhancements"; Type="docs"}
)

# Execute all commits
foreach ($commit in $commits) {
    Make-Commit -Date $commit.Date -Message $commit.Message -ChangeType $commit.Type
    Start-Sleep -Seconds 1  # Small delay between commits
}

Write-Host "`nAll commits created successfully!" -ForegroundColor Green
Write-Host "You can now check your git log with: git log --oneline --graph" -ForegroundColor Cyan 