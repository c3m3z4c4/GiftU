import React from 'react';

const SignIn = () => {
    return (
        <div className="main-container">
            <div className="container">
                <div className="logo-container">
                    <img className="logo-image" src="/images/logo.png" />
                    <img className="logo-name" src="/images/GiftÜ.png" />
                </div>
                <p className="title">SIGN IN</p>
                <form className="form">
                    <div className="input-container">
                        <div className="label">
                            <span className="label-text">Email</span>
                            <img className="input-image__mail" src="/images/mail2.png" />
                        </div>
                        <input type="text" className="input"/>
                    </div>
                    <div className="input-container">
                        <div className="label">
                            <span className="label-text">Password</span>
                            <img className="input-image__key" src="/images/key.png" />
                        </div>
                        <input type="text" className="input"/>
                    </div>
                    <button className="button">
                        SIGN IN
                    </button>
                </form>
            </div>
            <style jsx> {`
                    .main-container {
                        width: 100%;
                        height: 100vh;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                    }
                    .container {
                        width: 100%;
                        height: 580px;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                    }
                    .form {
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        align-items: center;
                    }
                    .logo-container {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }
                    .logo-image {
                        height: 100px;
                        width: auto;
                    }
                    .logo-name {
                        height: auto;
                        width: 100px;
                    }
                    .title {
                        line-height: 30px;
                        letter-spacing: 0.14em;
                        font-weight: bold;
                        font-size: 24px;
                        font-family: 'Quicksand', sans-serif;
                        margin: 30px 0;
                    }
                    .label {
                        font-family: 'Quicksand', sans-serif;
                        font-size: 14px;
                        line-height: 17px;
                        letter-spacing: 0.14em;
                        font-feature-settings: 'case'
                        display: flex;
                        align-items: center;
                        width: 100%;
                        height: 30px;
                    }
                    .label-text {
                      margin-right: 15px
                    }
                    .input-container {
                        display: flex;
                        flex-direction: column;
                        justify-content: space-around;
                        margin-bottom: 30px;
                    }
                    .input {
                        width: 258px;
                        background: transparent;
                        border: none;
                        border-bottom: 2px solid rgba(135, 211, 184, 0.6);
                        font-family: 'Quicksand', sans-serif;
                        font-size: 14px;
                        line-height: 17px;
                        color: #FFAB07;
                        padding: 10px 0;
                    }
                    .input:focus, textarea:focus, select:focus{
                        outline: none;
                    }
                    .input-image {
                        width: 16px;
                        height: 16px;
                        margin-left: 8px;
                    }
                    .input-image__mail {
                        transform: rotate(25deg);
                    }
                    .button {
                        width: 124.16px;
                        height: 34.58px;
                        background: #87D3B8;
                        background: rgba(21,152,105,0.2);
                        border: none;
                        box-sizing: border-box;
                        border-radius: 12px;
                        transform: matrix(1, 0, 0, 1, 0, 0);
                        font-weight: bold;
                        font-size: 11px;
                        line-height: 14px;
                        display: flex;
                        align-items: center;
                        letter-spacing: 0.11em;
                        font-family: 'Quicksand', sans-serif;
                        display: flex;
                        justify-content: center;
                        color: rgba(20, 180, 122, 0.49);
                        margin-top: 50px;
                    }
                    
                `}
            </style>
        </div>

    );
};

export default SignIn;