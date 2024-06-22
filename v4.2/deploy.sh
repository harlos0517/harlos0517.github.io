yarn build &&
mkdir ../temp &&
mv ../docs/v1 ../docs/v2 ../docs/v3 ../docs/CNAME ../docs/.nojekyll ../temp/ &&
rm -rf ../docs/* &&
cp build/* ../docs/ -r &&
mv ../temp/* ../temp/.nojekyll ../docs/ &&
rm -rf ../temp;
