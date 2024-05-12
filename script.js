const button = document.getElementById('confirm');
const result = document.getElementById('result');

button.addEventListener('click', (event) => {
  event.preventDefault();

  const name = document.getElementById('yourname__name').value;
  const crushname = document.getElementById('yourcrushname__name').value;

  const ratio_of_successfull = Math.round(Math.random() * 101);

  result.innerHTML = `Tỉ lệ thành công của bạn và crush là: ${ratio_of_successfull}%`

  const data = {
    name: name,
    crushname: crushname,
    ratio_of_successfull: ratio_of_successfull
  }

  // https://vercel-sever.vercel.app/crushs
  axios.post('https://vercel-sever-9gh4.vercel.app/crushs', data).then(() => {
    // alert('Dữ liệu đã được lưu thành công')
  }).then(() => {
    console.log('send');
    // return null;
  }).catch((err) => console.error('Éo gửi được dũ liệu',err));
})