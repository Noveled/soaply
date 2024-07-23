// 현재 페이지 URL
// http://127.0.0.1:5500/details.html?idx=19

// 실제로 데이터 가져오는 파트
// https://dabipyeung.com/soaply_backend/model/get_details.php?idx=19

// "pro_idx": "19",
// "pro_name": "제품 9번 ",
// "pro_price": "30000",
// "pro_desc": "디운은 힙즤로 사룰가는 미마준은, 몬떵는 버머녀 자튄나가도 캄어는 지크첸 여르운긴지요...,
// "pro_img": "insta-image-4.jpeg",
// "pro_reg": "2022-12-29 10:05:04"

const detailsWrapper = document.querySelector('.details-wrapper');

const url = new URL(window.location.href);
console.log(url);
// console.log(url.searchParams.get('idx'));
const idx = url.searchParams.get('idx');

const getDetailData = async () => {
  await fetch(
    `https://dabipyeung.com/soaply_backend/model/get_details.php?idx=${idx}`
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let dataElement;

      //   if (Array.isArray(data)) {
      //     data = data;
      //   } else {
      //     data = [data];
      //   }

      let dataArr = Array.isArray(data) ? data : [data];
      console.log(dataArr);

      dataArr.map((item) => {
        dataElement = `
        <div class="pro-details">
            <div class="pro-details-img">
                <img src="images/${item.pro_img}" alt="pro_img">
            </div>
            <div class="pro-details-info">
                <h4><b>상품 번호</b> : ${item.pro_idx}</h4>
                <p><b>상품명</b> : ${item.pro_name}</p>
                <p><b>가격</b> : ${item.pro_price}</p>
                <p><b>상품설명</b> : ${item.pro_desc}</p>
                <p><b>등록일</b> : ${item.pro_reg}</p>
                <div class="pro-details-info-btn">
                    <a href="#" class="common-btn">장바구니</a>
                    <a href="#" class="common-btn">구매하기</a>
                </div>
            </div>
        </div>
        `;
        detailsWrapper.innerHTML = dataElement;
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

getDetailData();
