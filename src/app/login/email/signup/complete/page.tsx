'use client'

import React, { useState } from 'react';
import Head from 'next/head';
import { useRouter } from "next/navigation";

const Complete: React.FC = () => {

  const router = useRouter();
  const nextPage = () => {
      router.push(`/home`);
  }

  
  return (
    <>
      <Head>
        <title>여수로</title>
        <meta name="description" content="여수 자전거 여행" />
      </Head>
      <div style={styles.container}>
        <div style={{width:'320px',margin:'0 auto'}}>
            <div style={styles.headerBox}>
            </div>
            <p style={styles.welcomeText}>반가워요 회원님!<br/>여수로 자전거 여행을 즐기러 <br/>가볼까요? </p>
            <div style={{ marginBottom: '245px' }}></div> 
            <button onClick={nextPage} style={styles.nextButton}>다음</button>
        </div>
      </div>
    </>
  );
};

const styles: any = {
  container: {
    width: '360px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin:'0 auto',
  },
  headerBox:{
    display:'flex',
    alignItems:'center',
    justifyContent:'space-between'
  },
  welcomeText: {
    color: '#1f1f1f',
    fontWeight: 600,
    fontFamily: 'Pretendard, sans-serif',
    fontSize: '20px',
    margin: '24px 0',
    lineHeight: '140%',
    letterSpacing: '-0.011em',
  },
  
  nextButton: {
    width:'100%',
    height:'48px',
    backgroundColor: '#0D77E0',
    color: '#fff',
    borderRadius: '4px',
    border: 'none',
    cursor: 'pointer',
    fontFamily: 'Pretendard, sans-serif',
    fontWeight: 'bold' as 'bold',
  },
};

export default Complete;