import React, {useState} from "react";
import {RFValue} from "react-native-responsive-fontsize";
import {useTheme} from "styled-components";
import {ActivityIndicator, Alert, Platform} from "react-native";

import {Container, Footer, FooterWrapper, Header, SignInTitle, Title, TitleWrapper} from "./styles";
import AppleSvg from '../../assets/apple.svg';
import GoogleSvg from '../../assets/google.svg';
import LogoSvg from '../../assets/logo.svg';
import {SignInSocialButton} from "../../components/SignInSocialButton";
import {useAuth} from "../../hooks/auth";

export function SignIn() {

    const [loading, setLoading] = useState(false);
    const {signInWithGoogle, signInWithApple} = useAuth();
    const theme = useTheme();

    async function handleSignInWithGoogle() {
        try {
            setLoading(true)
            await signInWithGoogle();
        } catch (e) {
            console.log(e)
            Alert.alert('Não foi possível conectar a conta Google');
            setLoading(false)
        }
    }

    async function handleSignInWithApple() {
        try {
            setLoading(true)
            return await signInWithApple();
        } catch (e) {
            console.log(e)
            Alert.alert('Não foi possível conectar a conta Apple');
            setLoading(false)
        }
    }

    return (
        <Container>
            <Header>
                <TitleWrapper>
                    <LogoSvg
                        width={RFValue(120)}
                        height={RFValue(68)}
                    />
                    <Title>
                        Controle suas {'\n'}
                        finanças de forma {'\n'}
                        muito simples
                    </Title>
                </TitleWrapper>

                <SignInTitle>
                    Faça seu login com {'\n'}
                    uma das contas abaixo
                </SignInTitle>
            </Header>

            <Footer>
                <FooterWrapper>
                    <SignInSocialButton
                        title={"Entrar com Google"}
                        svg={GoogleSvg}
                        onPress={handleSignInWithGoogle}
                    />

                    {
                        Platform.OS === 'ios' &&
                        <SignInSocialButton
                            title={"Entrar com Apple"}
                            svg={AppleSvg}
                            onPress={handleSignInWithApple}
                        />
                    }

                </FooterWrapper>

                {
                    loading &&
                    <ActivityIndicator
                        color={theme.colors.shape}
                        style={{marginTop: 18}}
                    />
                }
            </Footer>
        </Container>
    );
}
