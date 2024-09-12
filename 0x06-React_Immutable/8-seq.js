import { Seq } from 'immutable'

export default function printBestStudents (object) {
  function capLetter (string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  const filtered = Seq(object).filter((student) => {
    return student.score > 70
  })

  const newObj = filtered.toJS()

  Object.keys(newObj).map((key) => {
    newObj[key].firstName = capLetter(newObj[key].firstName)
    newObj[key].lastName = capLetter(newObj[key].lastName)
    return newObj[key]
  })

  console.log(newObj)
}
