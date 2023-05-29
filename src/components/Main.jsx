import React from 'react';
import {Routes,Route} from "react-router-dom";
import { Article1 } from './Article1';
import { Page } from './Page';
import { Article2 } from './Article2';
import { Article3 } from './Article3';
import { Article4 } from './Article4';
import { Article5 } from './Article5';
import { Article6 } from './Article6';
import { Article7 } from './Article7';
import { Article8 } from './Article8';

export const Main = () => {
    return (
        <div className='main'>
            <div className='container'>
            
                <Routes>
                    <Route index element={<Page></Page>} ></Route>
                    <Route path='/kgeu/' element={<Page></Page>}></Route>
                    <Route path='/kgeu/1' element={<Article1/>}></Route>
                    <Route path='/kgeu/2' element={<Article2/>}></Route>
                    <Route path='/kgeu/3' element={<Article3/>}></Route>
                    <Route path='/kgeu/4' element={<Article4/>}></Route>
                    <Route path='/kgeu/5' element={<Article5/>}></Route>
                    <Route path='/kgeu/6' element={<Article6/>}></Route>
                    <Route path='/kgeu/7' element={<Article7/>}></Route>
                    <Route path='/kgeu/8' element={<Article8/>}></Route>
                    <Route path='*' element={<Page></Page>}></Route>
                </Routes>
            </div>
        </div>
    );
}

