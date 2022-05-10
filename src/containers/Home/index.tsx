import React, { useRef, useCallback } from 'react';
import styled from 'styled-components';
import { useRequest } from 'ahooks';
import axios from 'axios';
import { AxiosResponse } from 'axios';
import Spin from './../../components/Loading';
import Profile from './../../components/Profile';
import { BASE_URL, QQ_INFO_PATH} from './../../constants/api';

interface DetailResponse {
    code?: number;
    lvzuan?: Record<string, unknown>,
    name?: string;
    qq?: string;
    qlogo?: string;

}

type ParamsType = number


async function getQQInfo<Model>(qq: number): Promise<DetailResponse> {
    // https://api.uomg.com/doc-qq.info.html api doc
    return axios.get(`${BASE_URL}${QQ_INFO_PATH}`, {
        params: { qq: qq }
    }).then((res: AxiosResponse<Model>) => res.data);
}


const WrapperDiv = styled.div`
    margin-top: 50px;
`

const WrapperInput = styled.input`
    margin-left: 10px;
    box-shadow: 0 0 0 1000px #ffffff inset;
    border: 0px;
    outline:none;
    border-bottom: 2px solid #000;
    font-size: 2rem;

`

const Home = (): React.ReactElement => {

    const inputVal = useRef(null);
    const { loading, error, data, run: runGetQQDetail } = useRequest<DetailResponse, [ParamsType]>(params => getQQInfo(params), {
        debounceWait: 300,
        manual: true,
    });

    const onKeyDown = useCallback((e: any): void => {
        if (e.keyCode === 13) {
            const qq = (inputVal.current as unknown as { value: string }).value;
            runGetQQDetail(Number(qq));
        }
    }, [runGetQQDetail])

    return (
        <>
            <h1 style={{ fontSize: '4rem' }}>QQ号查询</h1>
            <label htmlFor='qq' style={{ fontSize: '2rem' }} >QQ</label>
            <WrapperInput type='text' placeholder='请输入QQ号' id='qq' ref={inputVal} onKeyDown={onKeyDown} />
            {
                error && alert("网络请求异常，请重新再试！！")
            }
            <Spin isLoading={loading}>
                {
                    () => {
                        return (
                            <WrapperDiv>
                                <Profile {...data} />
                            </WrapperDiv>
                        )
                    }
                }
            </Spin>

        </>
    )
}

export default Home;