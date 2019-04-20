REM ng build --prod --output-path docs --base-href /phone-validation/
ng build --prod --output-path docs --base-href /
copy docs\index.html docs\404.html
copy src\robots.txt docs\robots.txt
copy src\sitemap.xml src\sitemap.xml
