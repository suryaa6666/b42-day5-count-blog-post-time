// let nama1 = "Frans Afriandi"
// let nama2 = "Surya Cantik Wibu"
// let nama3 = "Try Widodo Putra"

// console.log(nama1, nama2, nama3)

// Array
// var names = ["Frans Afriandi", "Rafi Alfian", "Dias Hafiz"]
// console.log(names[0])
// console.log(names[1])
// console.log(names[2])
// console.log(names.length)

// Object
// var dataSiswa1 = {
//     nama: "Frans",
//     umur: 17,
//     alamat: "jln. mars nomer 17"
// }

// var dataSiswa2 = {
//     nama: "Rian",
//     umur: 20,
//     alamat: "jln. kenangan"
// }

// var dataSiswa3 = {
//     nama: "samsul",
//     umur: 39,
//     alamat: "jln. depok"
// }

// var dataBanyak = {
//     siswa: {
//         nama: "surya",
//         umur: 99
//     }
// }

// console.log("umur saya yaitu", dataSiswa1["umur"])
// console.log(dataBanyak.siswa.nama, dataBanyak.siswa["umur"])
// console.log(dataSiswa1, dataSiswa2, dataSiswa3)

// Array of Object
// let dataAnakBootcamp = [
//     {
//         nama: "Khafiz",
//         batch: 42,
//         status: true // boolean, int : 1
//     },
//     {
//         nama: "Soleh",
//         batch: 1,
//         status: false // boolean, int : 0
//     },
//     {
//         nama: "Surya",
//         angkatan: 2022,
//         status: false
//     }
// ]

// console.log(dataAnakBootcamp)
// console.log(dataAnakBootcamp[2]["angkatan"])

// mainan function

// let data = []

// function addData() {
//     let person = {
//         name: "Surya",
//         address: "Jln. jalan"
//     }

//     data.push(person)
//     addData()
// }

// console.log(data)

let data = []

function addData(event) {

  event.preventDefault()

  let title = document.getElementById("input-blog-title").value;
  let content = document.getElementById("input-blog-content").value;
  let image = document.getElementById("input-blog-image").files;

  if (title == "") {
    return alert('title tidak boleh kosong!')
  } else if (content == "") {
    return alert('content tidak boleh kosong!')
  } else if (image.length == 0) {
    return alert('gambar tidak boleh kosong!')
  }

  let gambar = URL.createObjectURL(image[0])

  let blog = {
    title,
    content,
    gambar,
    postAt: new Date(),
    author: "Surya Gans"
  }

  data.push(blog)
  console.log(data)
  renderBlog()
}

function renderBlog() {
  document.getElementById("contents").innerHTML = ``
  for (let index = 0; index < data.length; index++) {
    document.getElementById("contents").innerHTML += `<div class="blog-list-item">
    <div class="blog-image">
      <img src="${data[index].gambar}" alt="" />
    </div>
    <div class="blog-content">
      <div class="btn-group">
        <button class="btn-edit">Edit Post</button>
        <button class="btn-post">Post Blog</button>
      </div>
      <h1>
        <a href="blog-detail.html" target="_blank">${data[index].title}</a>
      </h1>
      <div class="detail-blog-content">
      ${konversiWaktu(data[index].postAt)} | ${data[index].author}
      </div>
      <p>
      ${data[index].content}
      </p>
      <p style="text-align: right;">
        ${selisihWaktu(data[index].postAt)}
      </p>
    </div>
  </div>`
  }
}

function konversiWaktu(time) {
  let monthName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Des"]

  // console.log("date", time.getDate())
  // console.log("month", time.getMonth())
  // console.log("full year", time.getFullYear())
  // console.log("hours", time.getHours())
  // console.log("minutes", time.getMinutes())

  let hours = time.getHours()
  let minutes = time.getMinutes()

  if (hours < 10) {
    hours = "0" + hours
  }

  if (minutes < 10) {
    minutes = "0" + minutes
  }

  return `${time.getDate()} ${monthName[time.getMonth()]} ${time.getFullYear()} ${hours}:${minutes} WIB`
}

function selisihWaktu(time) {
  let timeNow = new Date()
  let timePost = time

  let distance = timeNow - timePost
  console.log("jarak", distance)

  let miliseconds = 1000 // 1 seconds adalah 1000 miliseconds

  let distanceDay = Math.floor(distance / (miliseconds * 60 * 60 * 24))
  let distanceHours = Math.floor(distance / (miliseconds * 60 * 60))
  let distanceMinutes = Math.floor(distance / (miliseconds * 60))
  let distanceSecond = Math.floor(distance / miliseconds) // 1 seconds ago

  if (distanceDay > 0) {
    return `${distanceDay} day ago`
  } else if (distanceHours > 0) {
    return `${distanceHours} hours ago`
  } else if (distanceMinutes > 0) {
    return `${distanceMinutes} minutes ago`
  } else {
    return `${distanceSecond} seconds ago`
  }
}

setInterval(function () {
  renderBlog()
}, 1000)


