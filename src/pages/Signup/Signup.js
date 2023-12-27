import { useEffect, useState } from 'react';
import './Signup.scss';
import Form from '../../components/Form/Form';
import Input from '../../components/Input/Input';
import { mockUserData } from './MockData';
import Layout from '../../layout/Layout';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    emailOrPhone: '',
    password: '',
    confirmPassword: '',
    introduction: '',
  });

  const [checkedReg, setCheckedReg] = useState({
    isUsername: false,
    isEmailOrPhone: false,
    isPassword: false,
    isConfirmPassword: false,
  });

  useEffect(() => {
    const emailRegEx = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;
    const phoneRegEx = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
    const passwordRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

    const checkUsername = !!formData.username;
    const checkEmailOrPhone = formData.emailOrPhone && (emailRegEx.test(formData.emailOrPhone) || phoneRegEx.test(formData.emailOrPhone));
    const checkPassword = formData.password && passwordRegEx.test(formData.password);
    const checkConfirmPassword = formData.confirmPassword && formData.password === formData.confirmPassword;

    setCheckedReg({
      isUsername: checkUsername,
      isEmailOrPhone: checkEmailOrPhone,
      isPassword: checkPassword,
      isConfirmPassword: checkConfirmPassword,
    });
  }, [formData]);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetchData();
  }

  const fetchData = () => {
    console.log('편의를 위한 출력 :', mockUserData);
    const existUser = mockUserData.find(user => user.emailOrPhone === formData.emailOrPhone);
    if (existUser) {
      window.alert(`이미 존재하는 이메일 주소 또는 휴대폰 번호입니다. 변경 후 다시 시도해주세요.`);
      return;
    }

    const { password, confirmPassword, ...rest } = formData;
    mockUserData.push(rest);
    console.log('편의를 위한 출력 (회원가입 완료 후 DB):', mockUserData);
    window.alert(`${rest.username}님, 성공적으로 회원가입이 완료되었습니다. 반갑습니다. 😁`);
    setFormData({ username: '', emailOrPhone: '', password: '', confirmPassword: '', introduction: '' });
    window.history.back();
  };

  return (
    <Layout>
      <div id="form-container">
        <Form onSubmit={handleSubmit}>
          <ul>
            <li className={checkedReg.isUsername ? 'valid' : null}>
              <span>✔</span> 회원명 20자 이내 입력
            </li>
            <li className={checkedReg.isEmailOrPhone ? 'valid' : null}>
              <span>✔</span> 이메일 주소 또는 휴대폰번호 입력후 유효한지 확인
            </li>
            <li className={checkedReg.isPassword ? 'valid' : null}>
              <span>✔</span> 비밀번호 8자 이상, 영소문자/대문자, 숫자, 특수문자 조합
            </li>
            <li className={checkedReg.isConfirmPassword ? 'valid' : null}>
              <span>✔</span> 비밀번호와 비밀번호 확인이 서로 일치하는지 확인
            </li>
          </ul>

          <Input
            label="회원명"
            id="username"
            type="text"
            inputMode="text"
            placeholder="회원명"
            name="username"
            onChange={handleChange}
            value={formData.username}
            maxLength="20"
            required
          />
          <Input
            label="이메일 주소 또는 폰번호"
            id="email"
            type="text"
            inputMode="text"
            placeholder="이메일 주소 또는 폰번호"
            name="emailOrPhone"
            onChange={handleChange}
            value={formData.emailOrPhone}
            required
          />
          <Input
            label="비밀번호"
            id="password"
            type="password"
            inputMode="text"
            placeholder="비밀번호"
            name="password"
            onChange={handleChange}
            value={formData.password}
            required
          />
          <Input
            label="비밀번호 재확인"
            id="confirmPassword"
            type="password"
            inputMode="text"
            placeholder="비밀번호 재확인"
            name="confirmPassword"
            onChange={handleChange}
            value={formData.confirmPassword}
            required
          />
          <Input
            label="자기소개"
            id="introduction"
            type="text"
            inputMode="text"
            placeholder="자기소개"
            name="introduction"
            maxLength="512"
            onChange={handleChange}
            value={formData.introduction}
          />

          <button
            className="form-submit"
            disabled={!checkedReg.isUsername || !checkedReg.isEmailOrPhone || !checkedReg.isPassword || !checkedReg.isConfirmPassword}
          >
            Sign up
          </button>
        </Form>
      </div>
    </Layout>
  );
};

export default Signup;
