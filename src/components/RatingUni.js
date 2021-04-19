import React from "react";
import MySlider from "./MySlider";
import MyProgress from "./MyProgress"
import MybuttonGui from "./MybuttonGui"
function App(){
  return(
    <div className="container">
      <div className="row ">
      <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
      </div>
      {/* bắt đầu tại đây  */}
        
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 mt-3 rating-show">
          {/* header */}
        <h1 ><span>Đánh giá</span> về chúng tôi</h1>
        <img src="images/5.PNG" id="trangtri" alt={"đây là ảnh trang trí"}/>
        <h5>Hiện có <span id="soluong-Rating">403</span> đánh giá về ĐH <span id="tenDH-Rating">DUY TAN</span></h5>
        <span id="danhGiaTB">Đánh giá trung bình</span>
        <div className="show-trungbinh">
            {/* <div className="hinh-tron">
            </div> */}
            <p id="trungbinh">4.2</p>
            <span>/5</span>
        </div>

        {/* body */}
        <div className="magin-lr">
        <MyProgress />
        </div>
        <hr></hr>
        <div className="viewRating">
          <span className="span-tieu-de">Chất lượng đào tạo</span>
          <MySlider />
        </div>
        <div className="viewRating">
          <span  className="span-tieu-de">Cơ sở vật chất</span>
          <MySlider />
        </div>
        <div className="viewRating">
          <span  className="span-tieu-de">Học phí</span>
          <MySlider />
        </div>
        <div className="viewRating">
          <span  className="span-tieu-de">Cơ hội việc làm</span>
          <MySlider />
        </div>
        <div className="viewRating">
          <span  className="span-tieu-de">Hoạt động trong trường</span>
          <MySlider />
        </div>
        <span id="muon-danh-gia">Click nếu bạn muốn đánh giá về chúng tôi</span>
        <MybuttonGui />
      </div>

      {/* kết thúc tại đây  */}
      <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3"> 
      </div>
      </div>
    </div>
   
  )
}
export default App