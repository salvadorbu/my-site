Write-Host "Running build..."
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "Build failed."
    exit $LASTEXITCODE
}

Write-Host "Transferring build to backend..."
Copy-Item -Path "C:\Users\salva\Desktop\my-site-backend\static\favicon.ico" -Destination ".\build\favicon.ico" -Force
Copy-Item -Path ".\build" -Destination "C:\Users\salva\Desktop\my-site-backend" -Recurse -Force

$staticFolderPath = "C:\Users\salva\Desktop\my-site-backend\static"
if (Test-Path $staticFolderPath) {
    Write-Host "Deleting existing static folder..."
    Remove-Item -Path $staticFolderPath -Recurse -Force
}

$buildFolderPath = "C:\Users\salva\Desktop\my-site-backend\build"
$newFolderPath = "C:\Users\salva\Desktop\my-site-backend\static"
Write-Host "Renaming build folder to static..."
Rename-Item -Path $buildFolderPath -NewName $newFolderPath
