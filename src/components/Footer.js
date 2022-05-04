import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <FooterContainer>
      <FooterLinkContainer>
        <FooterLinkTitle>넷플릭스 대한민국</FooterLinkTitle>
        <FooterLinkContent>
          <FooterLink href="https://help.netflix.com/ko/node/412">
            넷플릭스 소개
          </FooterLink>
          <FooterLink href="https://help.netflix.com/ko">고객 센터</FooterLink>
          <FooterLink href="https://help.netflix.com/ko/">
            미디어 센터
          </FooterLink>
          <FooterLink href="https://help.netflix.com/ko/">이용 약관</FooterLink>
          <FooterLink href="https://www.netflix.com/browse/subtitles">
            자막 및 음성
          </FooterLink>
          <FooterLink href="https://www.netflix.com/browse/audio-description">
            음성 지원
          </FooterLink>
          <FooterLink href="http://ir.netflix.com/">투자 정보(IR)</FooterLink>
          <FooterLink href="https://media.netflix.com/">미디어 센터</FooterLink>
          <FooterLink href="https://help.netflix.com/contactus">
            문의하기
          </FooterLink>
          <FooterLink href="https://help.netflix.com/legal/notices">
            법적 고지
          </FooterLink>
          <FooterLink href="https://www.netflix.com/Cookies">
            쿠키 설정
          </FooterLink>
          <FooterLink href="https://help.netflix.com/legal/corpinfo">
            회사 정보
          </FooterLink>
        </FooterLinkContent>
        <FooterDescContainer>
          <h2>ⓒ Netflix Rights Reserved.</h2>
        </FooterDescContainer>
      </FooterLinkContainer>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
  border-top: 1px solid rgb(25, 25, 25);
  width: 100%;
  position: relative;
  z-index: 100;
  margin-top: 60px;

  @media (max-width: 768px) {
    padding: 10px 0;
  }
`;

const FooterLinkContainer = styled.div`
  text-align: center;
  width: 500px;

  @media (max-width: 768px) {
    margin: 0 auto;
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
  }
`;

const FooterLinkTitle = styled.div`
  color: gray;
  font-size: 17px;
`;

const FooterLinkContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 35px auto;

  @media (max-width: 768px) {
    margin-top: 26px;
  }
`;

const FooterLink = styled.a`
  color: gray;
  font-size: 14px;
  width: 110px;
  margin-bottom: 21px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  @media (min-width: 768px) {
    font-size: 14px;
    margin-bottom: 16px;
  }
`;

const FooterDescContainer = styled.div`
  margin-top: 30px;
  h2 {
    color: white;
    font-size: 14px;
    text-align: center;
    padding: 0;
  }

  @media (min-width: 768px) {
    margin-top: 20px;
  }
`;
