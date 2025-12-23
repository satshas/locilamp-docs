import React, { useRef, useEffect, useContext, useState } from "react";
import { ModelContext } from "/Components/ModelContext.jsx";
import { MdClose, MdMenu } from "react-icons/md";


export default function StepNavigationMenu() {

    const { stepList, setStepPosition, stepCount, currentStepName, modelProperties } = useContext(ModelContext)
    const [btnClass, setBtnClass] = useState('stepNaviBtn');
    const [btnColor, setBtnColor] = useState();

    if (stepList) {
        const tempArray = [...Array(stepList.length)]
    }


 const [isShown, setIsShown] = useState(false);

    const toggleMobileMenu = () => {
        setIsShown(!isShown);
    };

     useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 890) {
        setIsShown(false);
      } 
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);
 
    return (
        <>
          <button className='hamburgerStepNavi' onClick={toggleMobileMenu}>
                         {isShown ? <MdClose />: <MdMenu />}
                    </button>
        <div className={isShown? 'stepNaviMobile': 'stepNavi'} >
            <ul>
                {stepList ? stepList.map((name, index) =>
                    < li key={index} >
                        {modelProperties && name === modelProperties.titleName ?
                            <button
                                id={`${name}`}
                                style={{ backgroundColor: '#000000', color: '#ffffff' }}
                                onClick={() => {
                                    setStepPosition(index);
                                }}
                                className={isShown? 'stepNaviBtnMobile': 'stepNaviBtn'}
                            >
                                {name}
                            </button>
                            :
                            <button
                                id={`${name}`}
                                style={{ backgroundColor: btnColor }}
                                onClick={() => {
                                    setStepPosition(index);
                                }}
                                className={isShown? 'stepNaviBtnMobile': 'stepNaviBtn'}
                            >
                                {name}
                            </button>
                        }

                    </li>
                ) : null}


            </ul>

            {/*   {stepName.map((step, index) => (
                <button
                    key={index}
                    onClick={() => setStepCount(index)}
                    className={stepCount === index ? "active" : ""}
                >
                    {step}
                </button>
            ))} */}

        </div >
  
            </>
    );
}

export const MemoizedStepNavigationMenu = React.memo(StepNavigationMenu)