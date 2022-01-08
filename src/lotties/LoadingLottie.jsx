import { useEffect } from 'react'
import lottie from "lottie-web";
import loading from "./../assets/lotties/loadingLottie.json";

function LoadingLottie( cssClass ) {

    useEffect( () => {
        lottie.loadAnimation({
            container: document.querySelector("#loading"),
            animationData: loading
          })
    }, [1])
 
      return (
        <div className={ cssClass } id="loading"></div>
      )    
}

LoadingLottie.defaultProps = {
    cssClass : '',
}

export default LoadingLottie

