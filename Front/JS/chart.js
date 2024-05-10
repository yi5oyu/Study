https://www.chartjs.org/

- cdn. 라이브러리 포함
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

- 차트를 표시할 캔버스 요소를 HTML에 추가
<canvas id="myChart"></canvas>
 or
<canvas id="goodCanvas1" width="400" height="100" aria-label="Hello ARIA World" role="img"></canvas>

- 차트 데이터 및 옵션 설정
 : Chart 클래스 인스턴스화 (방법)
  let ctx = document.getElementById('myChart');
  let ctx = document.getElementById('myChart').getContext('2d');
  let ctx = $('#myChart');
  let ctx = 'myChart';

- 사용
let ctx = document.getElementById('myChart').getContext('2d');
let myLineChart = new Chart(ctx, {
    type: 'line', 
     // 차트의 타입을 선 차트로 설정
    data: {
        labels: ['1월', '2월', '3월', '4월', '5월', '6월', '7월'], // X 축 레이블
        datasets: [{
            label: '월별 판매량',
            data: [65, 59, 80, 81, 56, 55, 40], // 각 레이블에 해당하는 데이터
            fill: false,
            borderColor: 'rgb(75, 192, 192)', // 선의 색상
            tension: 0.1 // 선의 곡률
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true // Y 축의 시작을 0부터
            }
        }
    }
});
