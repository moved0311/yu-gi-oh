for i in { 1 }
do
  mv `ls | head -500` ./tmp/

  npx imagezip -I ./tmp

  mv ./tmp/* ./compress

  echo "$(ls | wc -l) --> $(ls ./compress | wc -l)" 
done