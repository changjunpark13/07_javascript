/*
  1-1. 전달 받은 문자열(str) 안에 있는 값을 ',' 기준으로 배열로 분리하고 전달받은 단어(word)가 있는 index 위치를 문자열로 리턴하는 함수 findWord(str, word)를 작성한다.
 */

const str =
  "사과,바나나,당근,김밥,치즈,떡볶이,햄버거,환타,사이다,콜라,고양이,강아지";

console.log(findWord(str, "고양이"));   // 고양이는 배열 index 10번째에 있습니다.
console.log(findWord(str, "샌드위치")); // 샌드위치는 배열에 존재하지 않습니다.
console.log(findWord(str));             // 결과를 확인할 수 없습니다.

function findWord(str, word) {
  if (!str || !word) {
    return "결과를 확인할 수 없습니다.";
  }

  const arr = str.split(",");
  const index = arr.indexOf(word);

  if (index === -1) {
    return `${word}는 배열에 존재하지 않습니다.`;
  }
  return `${word}는 배열 index ${index}번째에 있습니다.`;
}
