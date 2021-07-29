import React , {useEffect} from 'react'
import Type from './Type'
import request from './request'
import Banner from './Banner'
import url from './axios'
import {useDispatch} from 'react-redux'
import {fetchSeries} from '../redux/reducer'

function Show() {
    const dispatch = useDispatch() ;
    useEffect(()=>{
        function fetchData(){
            url.get(request.Pub)
                .then(res=>{
                        dispatch(fetchSeries(res.data.results))
                })
        }
        fetchData()
    },[])
    return (
        <div>
            <Banner/>
            <Type title="Trending" url={request.Trending}/>
            <Type title="Drama" url={request.Drama}/>
            <Type title="Action" url={request.Action}/>
            <Type title="Comedy" url={request.Comedy}/>
            <Type title="Animation" url={request.Anim}/>
            <Type title="Horror" url={request.Horror}/>
            <Type title="Romance" url={request.Romance}/>
            <Type title="Mystery" url={request.Mystery}/>
            <div className="created">
                <a  href="https://www.facebook.com/profile.php?id=100005962092615"><i style={{paddingRight:'5px'}} class='far fa-copyright'></i>created by aziz</a>
            </div>
        </div>
    )
}

export default Show
