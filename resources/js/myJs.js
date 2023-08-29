// script 태그 내에 작성하던 javaScript 코드 작성
function f_rgbColor(){
    let red = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);

    return "rgb("+red+", "+blue+", "+green+")";
}

const v_phone = "01073987332";

function getParameter(p_key) {
    //현재 주소값.
    let v_url = location.href;

    //주소내에 ?가 존재하는지 확인. 있다면 인덱스번호 반환, 없으면 -1반환
    if (v_url.indexOf("?") != -1) {
        //?를 기준으로 문자를 분리, 배열형태로 반환 -> 쿼리스트링을 기준으로 오른쪽 값이 필요하기에, 인덱스는 1번.
        let v_queryString = v_url.split("?")[1];

        //&를 기준으로 파라미터들을 분리시킨다.
        //["id=akow283", "pw=a123"]
        let v_parameters = v_queryString.split("&");

        for (let i = 0; i < v_parameters.length; i++) {
            let v_key = v_parameters[i].split("=")[0];
            let v_value = v_parameters[i].split("=")[1];

            if (v_key == p_key) {
                return decodeURIComponent(v_value);
            }
        }
    }

}