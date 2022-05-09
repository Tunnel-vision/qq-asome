import React, { Children } from 'react';
import styled from 'styled-components';


const WrapperDiv = styled.div`
    .container {
	width:100%;
	height:100%;
	display:block;
	position:fixed;
	top:0px;
	left:0px;
	z-index:9;
	background:#ffffff;
}
@-moz-keyframes dots-loader {
	0% {
	-moz-box-shadow:#f86 -14px -14px 0 7px,#fc6 14px -14px 0 7px,#6d7 14px 14px 0 7px,#4ae -14px 14px 0 7px;
	box-shadow:#f86 -14px -14px 0 7px,#fc6 14px -14px 0 7px,#6d7 14px 14px 0 7px,#4ae -14px 14px 0 7px;
}
8.33% {
	-moz-box-shadow:#f86 14px -14px 0 7px,#fc6 14px -14px 0 7px,#6d7 14px 14px 0 7px,#4ae -14px 14px 0 7px;
	box-shadow:#f86 14px -14px 0 7px,#fc6 14px -14px 0 7px,#6d7 14px 14px 0 7px,#4ae -14px 14px 0 7px;
}
16.67% {
	-moz-box-shadow:#f86 14px 14px 0 7px,#fc6 14px 14px 0 7px,#6d7 14px 14px 0 7px,#4ae -14px 14px 0 7px;
	box-shadow:#f86 14px 14px 0 7px,#fc6 14px 14px 0 7px,#6d7 14px 14px 0 7px,#4ae -14px 14px 0 7px;
}
25% {
	-moz-box-shadow:#f86 -14px 14px 0 7px,#fc6 -14px 14px 0 7px,#6d7 -14px 14px 0 7px,#4ae -14px 14px 0 7px;
	box-shadow:#f86 -14px 14px 0 7px,#fc6 -14px 14px 0 7px,#6d7 -14px 14px 0 7px,#4ae -14px 14px 0 7px;
}
33.33% {
	-moz-box-shadow:#f86 -14px -14px 0 7px,#fc6 -14px 14px 0 7px,#6d7 -14px -14px 0 7px,#4ae -14px -14px 0 7px;
	box-shadow:#f86 -14px -14px 0 7px,#fc6 -14px 14px 0 7px,#6d7 -14px -14px 0 7px,#4ae -14px -14px 0 7px;
}
41.67% {
	-moz-box-shadow:#f86 14px -14px 0 7px,#fc6 -14px 14px 0 7px,#6d7 -14px -14px 0 7px,#4ae 14px -14px 0 7px;
	box-shadow:#f86 14px -14px 0 7px,#fc6 -14px 14px 0 7px,#6d7 -14px -14px 0 7px,#4ae 14px -14px 0 7px;
}
50% {
	-moz-box-shadow:#f86 14px 14px 0 7px,#fc6 -14px 14px 0 7px,#6d7 -14px -14px 0 7px,#4ae 14px -14px 0 7px;
	box-shadow:#f86 14px 14px 0 7px,#fc6 -14px 14px 0 7px,#6d7 -14px -14px 0 7px,#4ae 14px -14px 0 7px;
}
58.33% {
	-moz-box-shadow:#f86 -14px 14px 0 7px,#fc6 -14px 14px 0 7px,#6d7 -14px -14px 0 7px,#4ae 14px -14px 0 7px;
	box-shadow:#f86 -14px 14px 0 7px,#fc6 -14px 14px 0 7px,#6d7 -14px -14px 0 7px,#4ae 14px -14px 0 7px;
}
66.67% {
	-moz-box-shadow:#f86 -14px -14px 0 7px,#fc6 -14px -14px 0 7px,#6d7 -14px -14px 0 7px,#4ae 14px -14px 0 7px;
	box-shadow:#f86 -14px -14px 0 7px,#fc6 -14px -14px 0 7px,#6d7 -14px -14px 0 7px,#4ae 14px -14px 0 7px;
}
75% {
	-moz-box-shadow:#f86 14px -14px 0 7px,#fc6 14px -14px 0 7px,#6d7 14px -14px 0 7px,#4ae 14px -14px 0 7px;
	box-shadow:#f86 14px -14px 0 7px,#fc6 14px -14px 0 7px,#6d7 14px -14px 0 7px,#4ae 14px -14px 0 7px;
}
83.33% {
	-moz-box-shadow:#f86 14px 14px 0 7px,#fc6 14px -14px 0 7px,#6d7 14px 14px 0 7px,#4ae 14px 14px 0 7px;
	box-shadow:#f86 14px 14px 0 7px,#fc6 14px -14px 0 7px,#6d7 14px 14px 0 7px,#4ae 14px 14px 0 7px;
}
91.67% {
	-moz-box-shadow:#f86 -14px 14px 0 7px,#fc6 14px -14px 0 7px,#6d7 14px 14px 0 7px,#4ae -14px 14px 0 7px;
	box-shadow:#f86 -14px 14px 0 7px,#fc6 14px -14px 0 7px,#6d7 14px 14px 0 7px,#4ae -14px 14px 0 7px;
}
100% {
	-moz-box-shadow:#f86 -14px -14px 0 7px,#fc6 14px -14px 0 7px,#6d7 14px 14px 0 7px,#4ae -14px 14px 0 7px;
	box-shadow:#f86 -14px -14px 0 7px,#fc6 14px -14px 0 7px,#6d7 14px 14px 0 7px,#4ae -14px 14px 0 7px;
}
}@-webkit-keyframes dots-loader {
	0% {
	-webkit-box-shadow:#f86 -14px -14px 0 7px,#fc6 14px -14px 0 7px,#6d7 14px 14px 0 7px,#4ae -14px 14px 0 7px;
	box-shadow:#f86 -14px -14px 0 7px,#fc6 14px -14px 0 7px,#6d7 14px 14px 0 7px,#4ae -14px 14px 0 7px;
}
8.33% {
	-webkit-box-shadow:#f86 14px -14px 0 7px,#fc6 14px -14px 0 7px,#6d7 14px 14px 0 7px,#4ae -14px 14px 0 7px;
	box-shadow:#f86 14px -14px 0 7px,#fc6 14px -14px 0 7px,#6d7 14px 14px 0 7px,#4ae -14px 14px 0 7px;
}
16.67% {
	-webkit-box-shadow:#f86 14px 14px 0 7px,#fc6 14px 14px 0 7px,#6d7 14px 14px 0 7px,#4ae -14px 14px 0 7px;
	box-shadow:#f86 14px 14px 0 7px,#fc6 14px 14px 0 7px,#6d7 14px 14px 0 7px,#4ae -14px 14px 0 7px;
}
25% {
	-webkit-box-shadow:#f86 -14px 14px 0 7px,#fc6 -14px 14px 0 7px,#6d7 -14px 14px 0 7px,#4ae -14px 14px 0 7px;
	box-shadow:#f86 -14px 14px 0 7px,#fc6 -14px 14px 0 7px,#6d7 -14px 14px 0 7px,#4ae -14px 14px 0 7px;
}
33.33% {
	-webkit-box-shadow:#f86 -14px -14px 0 7px,#fc6 -14px 14px 0 7px,#6d7 -14px -14px 0 7px,#4ae -14px -14px 0 7px;
	box-shadow:#f86 -14px -14px 0 7px,#fc6 -14px 14px 0 7px,#6d7 -14px -14px 0 7px,#4ae -14px -14px 0 7px;
}
41.67% {
	-webkit-box-shadow:#f86 14px -14px 0 7px,#fc6 -14px 14px 0 7px,#6d7 -14px -14px 0 7px,#4ae 14px -14px 0 7px;
	box-shadow:#f86 14px -14px 0 7px,#fc6 -14px 14px 0 7px,#6d7 -14px -14px 0 7px,#4ae 14px -14px 0 7px;
}
50% {
	-webkit-box-shadow:#f86 14px 14px 0 7px,#fc6 -14px 14px 0 7px,#6d7 -14px -14px 0 7px,#4ae 14px -14px 0 7px;
	box-shadow:#f86 14px 14px 0 7px,#fc6 -14px 14px 0 7px,#6d7 -14px -14px 0 7px,#4ae 14px -14px 0 7px;
}
58.33% {
	-webkit-box-shadow:#f86 -14px 14px 0 7px,#fc6 -14px 14px 0 7px,#6d7 -14px -14px 0 7px,#4ae 14px -14px 0 7px;
	box-shadow:#f86 -14px 14px 0 7px,#fc6 -14px 14px 0 7px,#6d7 -14px -14px 0 7px,#4ae 14px -14px 0 7px;
}
66.67% {
	-webkit-box-shadow:#f86 -14px -14px 0 7px,#fc6 -14px -14px 0 7px,#6d7 -14px -14px 0 7px,#4ae 14px -14px 0 7px;
	box-shadow:#f86 -14px -14px 0 7px,#fc6 -14px -14px 0 7px,#6d7 -14px -14px 0 7px,#4ae 14px -14px 0 7px;
}
75% {
	-webkit-box-shadow:#f86 14px -14px 0 7px,#fc6 14px -14px 0 7px,#6d7 14px -14px 0 7px,#4ae 14px -14px 0 7px;
	box-shadow:#f86 14px -14px 0 7px,#fc6 14px -14px 0 7px,#6d7 14px -14px 0 7px,#4ae 14px -14px 0 7px;
}
83.33% {
	-webkit-box-shadow:#f86 14px 14px 0 7px,#fc6 14px -14px 0 7px,#6d7 14px 14px 0 7px,#4ae 14px 14px 0 7px;
	box-shadow:#f86 14px 14px 0 7px,#fc6 14px -14px 0 7px,#6d7 14px 14px 0 7px,#4ae 14px 14px 0 7px;
}
91.67% {
	-webkit-box-shadow:#f86 -14px 14px 0 7px,#fc6 14px -14px 0 7px,#6d7 14px 14px 0 7px,#4ae -14px 14px 0 7px;
	box-shadow:#f86 -14px 14px 0 7px,#fc6 14px -14px 0 7px,#6d7 14px 14px 0 7px,#4ae -14px 14px 0 7px;
}
100% {
	-webkit-box-shadow:#f86 -14px -14px 0 7px,#fc6 14px -14px 0 7px,#6d7 14px 14px 0 7px,#4ae -14px 14px 0 7px;
	box-shadow:#f86 -14px -14px 0 7px,#fc6 14px -14px 0 7px,#6d7 14px 14px 0 7px,#4ae -14px 14px 0 7px;
}
}@keyframes dots-loader {
	0% {
	-moz-box-shadow:#f86 -14px -14px 0 7px,#fc6 14px -14px 0 7px,#6d7 14px 14px 0 7px,#4ae -14px 14px 0 7px;
	-webkit-box-shadow:#f86 -14px -14px 0 7px,#fc6 14px -14px 0 7px,#6d7 14px 14px 0 7px,#4ae -14px 14px 0 7px;
	box-shadow:#f86 -14px -14px 0 7px,#fc6 14px -14px 0 7px,#6d7 14px 14px 0 7px,#4ae -14px 14px 0 7px;
}
8.33% {
	-moz-box-shadow:#f86 14px -14px 0 7px,#fc6 14px -14px 0 7px,#6d7 14px 14px 0 7px,#4ae -14px 14px 0 7px;
	-webkit-box-shadow:#f86 14px -14px 0 7px,#fc6 14px -14px 0 7px,#6d7 14px 14px 0 7px,#4ae -14px 14px 0 7px;
	box-shadow:#f86 14px -14px 0 7px,#fc6 14px -14px 0 7px,#6d7 14px 14px 0 7px,#4ae -14px 14px 0 7px;
}
16.67% {
	-moz-box-shadow:#f86 14px 14px 0 7px,#fc6 14px 14px 0 7px,#6d7 14px 14px 0 7px,#4ae -14px 14px 0 7px;
	-webkit-box-shadow:#f86 14px 14px 0 7px,#fc6 14px 14px 0 7px,#6d7 14px 14px 0 7px,#4ae -14px 14px 0 7px;
	box-shadow:#f86 14px 14px 0 7px,#fc6 14px 14px 0 7px,#6d7 14px 14px 0 7px,#4ae -14px 14px 0 7px;
}
25% {
	-moz-box-shadow:#f86 -14px 14px 0 7px,#fc6 -14px 14px 0 7px,#6d7 -14px 14px 0 7px,#4ae -14px 14px 0 7px;
	-webkit-box-shadow:#f86 -14px 14px 0 7px,#fc6 -14px 14px 0 7px,#6d7 -14px 14px 0 7px,#4ae -14px 14px 0 7px;
	box-shadow:#f86 -14px 14px 0 7px,#fc6 -14px 14px 0 7px,#6d7 -14px 14px 0 7px,#4ae -14px 14px 0 7px;
}
33.33% {
	-moz-box-shadow:#f86 -14px -14px 0 7px,#fc6 -14px 14px 0 7px,#6d7 -14px -14px 0 7px,#4ae -14px -14px 0 7px;
	-webkit-box-shadow:#f86 -14px -14px 0 7px,#fc6 -14px 14px 0 7px,#6d7 -14px -14px 0 7px,#4ae -14px -14px 0 7px;
	box-shadow:#f86 -14px -14px 0 7px,#fc6 -14px 14px 0 7px,#6d7 -14px -14px 0 7px,#4ae -14px -14px 0 7px;
}
41.67% {
	-moz-box-shadow:#f86 14px -14px 0 7px,#fc6 -14px 14px 0 7px,#6d7 -14px -14px 0 7px,#4ae 14px -14px 0 7px;
	-webkit-box-shadow:#f86 14px -14px 0 7px,#fc6 -14px 14px 0 7px,#6d7 -14px -14px 0 7px,#4ae 14px -14px 0 7px;
	box-shadow:#f86 14px -14px 0 7px,#fc6 -14px 14px 0 7px,#6d7 -14px -14px 0 7px,#4ae 14px -14px 0 7px;
}
50% {
	-moz-box-shadow:#f86 14px 14px 0 7px,#fc6 -14px 14px 0 7px,#6d7 -14px -14px 0 7px,#4ae 14px -14px 0 7px;
	-webkit-box-shadow:#f86 14px 14px 0 7px,#fc6 -14px 14px 0 7px,#6d7 -14px -14px 0 7px,#4ae 14px -14px 0 7px;
	box-shadow:#f86 14px 14px 0 7px,#fc6 -14px 14px 0 7px,#6d7 -14px -14px 0 7px,#4ae 14px -14px 0 7px;
}
58.33% {
	-moz-box-shadow:#f86 -14px 14px 0 7px,#fc6 -14px 14px 0 7px,#6d7 -14px -14px 0 7px,#4ae 14px -14px 0 7px;
	-webkit-box-shadow:#f86 -14px 14px 0 7px,#fc6 -14px 14px 0 7px,#6d7 -14px -14px 0 7px,#4ae 14px -14px 0 7px;
	box-shadow:#f86 -14px 14px 0 7px,#fc6 -14px 14px 0 7px,#6d7 -14px -14px 0 7px,#4ae 14px -14px 0 7px;
}
66.67% {
	-moz-box-shadow:#f86 -14px -14px 0 7px,#fc6 -14px -14px 0 7px,#6d7 -14px -14px 0 7px,#4ae 14px -14px 0 7px;
	-webkit-box-shadow:#f86 -14px -14px 0 7px,#fc6 -14px -14px 0 7px,#6d7 -14px -14px 0 7px,#4ae 14px -14px 0 7px;
	box-shadow:#f86 -14px -14px 0 7px,#fc6 -14px -14px 0 7px,#6d7 -14px -14px 0 7px,#4ae 14px -14px 0 7px;
}
75% {
	-moz-box-shadow:#f86 14px -14px 0 7px,#fc6 14px -14px 0 7px,#6d7 14px -14px 0 7px,#4ae 14px -14px 0 7px;
	-webkit-box-shadow:#f86 14px -14px 0 7px,#fc6 14px -14px 0 7px,#6d7 14px -14px 0 7px,#4ae 14px -14px 0 7px;
	box-shadow:#f86 14px -14px 0 7px,#fc6 14px -14px 0 7px,#6d7 14px -14px 0 7px,#4ae 14px -14px 0 7px;
}
83.33% {
	-moz-box-shadow:#f86 14px 14px 0 7px,#fc6 14px -14px 0 7px,#6d7 14px 14px 0 7px,#4ae 14px 14px 0 7px;
	-webkit-box-shadow:#f86 14px 14px 0 7px,#fc6 14px -14px 0 7px,#6d7 14px 14px 0 7px,#4ae 14px 14px 0 7px;
	box-shadow:#f86 14px 14px 0 7px,#fc6 14px -14px 0 7px,#6d7 14px 14px 0 7px,#4ae 14px 14px 0 7px;
}
91.67% {
	-moz-box-shadow:#f86 -14px 14px 0 7px,#fc6 14px -14px 0 7px,#6d7 14px 14px 0 7px,#4ae -14px 14px 0 7px;
	-webkit-box-shadow:#f86 -14px 14px 0 7px,#fc6 14px -14px 0 7px,#6d7 14px 14px 0 7px,#4ae -14px 14px 0 7px;
	box-shadow:#f86 -14px 14px 0 7px,#fc6 14px -14px 0 7px,#6d7 14px 14px 0 7px,#4ae -14px 14px 0 7px;
}
100% {
	-moz-box-shadow:#f86 -14px -14px 0 7px,#fc6 14px -14px 0 7px,#6d7 14px 14px 0 7px,#4ae -14px 14px 0 7px;
	-webkit-box-shadow:#f86 -14px -14px 0 7px,#fc6 14px -14px 0 7px,#6d7 14px 14px 0 7px,#4ae -14px 14px 0 7px;
	box-shadow:#f86 -14px -14px 0 7px,#fc6 14px -14px 0 7px,#6d7 14px 14px 0 7px,#4ae -14px 14px 0 7px;
}
    }/*:not(:required) hides this rule from IE9 and below */
        .dots-loader:not(:required) {
        overflow:hidden;
        position:relative;
        text-indent:-9999px;
        display:inline-block;
        width:7px;
        height:7px;
        background:transparent;
        border-radius:100%;
        -moz-box-shadow:#f86 -14px -14px 0 7px,#fc6 14px -14px 0 7px,#6d7 14px 14px 0 7px,#4ae -14px 14px 0 7px;
        -webkit-box-shadow:#f86 -14px -14px 0 7px,#fc6 14px -14px 0 7px,#6d7 14px 14px 0 7px,#4ae -14px 14px 0 7px;
        box-shadow:#f86 -14px -14px 0 7px,#fc6 14px -14px 0 7px,#6d7 14px 14px 0 7px,#4ae -14px 14px 0 7px;
        -moz-animation:dots-loader 5s infinite ease-in-out;
        -webkit-animation:dots-loader 5s infinite ease-in-out;
        animation:dots-loader 5s infinite ease-in-out;
        -moz-transform-origin:50% 50%;
        -ms-transform-origin:50% 50%;
        -webkit-transform-origin:50% 50%;
        transform-origin:50% 50%;
    }
    .hourglass {
        width:48px;
        height:96px;
        position:absolute;
        left:50%;
        top:50%;
        margin-left:-24px;
        margin-top:-48px;
        background:#58498E;
        box-shadow:inset #58498E 0 0 0 0,inset #FFF 0 2em 0 0,inset #58498E 0 0 4em 0;
        animation:hourglass 1s linear infinite;
    }

`

const Loading = () => {
    return (
        <WrapperDiv className="container">
            <span className="dots-loader hourglass">Loading…</span>
        </WrapperDiv>
    )
}

interface Props {
    isLoading: boolean;
    children: ()=> React.ReactElement;
}

const Spin: React.FC<Props> = ({ children, isLoading=true}) => {
    if(isLoading){
        // Loading 组件找的 网上的
        return <Loading />;
    }else{
        return children();
    }
    
}

export default Spin;