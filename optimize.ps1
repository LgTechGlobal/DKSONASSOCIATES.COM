Add-Type -AssemblyName System.Drawing

$folder = "c:\Users\Manas\Desktop\Client\DKSONASSOCIATES\src\assets\Project Portfolio"
$files = Get-ChildItem -Path $folder -File

foreach ($file in $files) {
    if ($file.Extension -match '\.(png|jpg|jpeg)') {
        $imgPath = $file.FullName
        $img = [System.Drawing.Image]::FromFile($imgPath)
        
        $maxWidth = 1200
        $width = $img.Width
        $height = $img.Height
        
        if ($width -gt $maxWidth) {
            $height = [int](($maxWidth / $width) * $height)
            $width = $maxWidth
        }
        
        $bmp = New-Object System.Drawing.Bitmap($width, $height)
        $graph = [System.Drawing.Graphics]::FromImage($bmp)
        $graph.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
        $graph.DrawImage($img, 0, 0, $width, $height)
        
        $img.Dispose()
        $graph.Dispose()
        
        # Save as jpg
        $newName = $file.BaseName + "-opt.jpg"
        $newPath = Join-Path $folder $newName
        
        $bmp.Save($newPath, [System.Drawing.Imaging.ImageFormat]::Jpeg)
        $bmp.Dispose()
        
        Write-Host "Processed: $newName"
    }
}
