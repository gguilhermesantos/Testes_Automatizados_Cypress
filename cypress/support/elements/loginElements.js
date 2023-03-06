class LoginElements {
    userNameCorreto = () => { return '#user-name' }
    userNameCorretoValue = () => { return 'standard_user' }
    userNamebloqueado = () => { return '#user-name' }
    userNamebloqueadoValue = () => { return 'locked_out_user' }

    senha = () => { return '.input_error.form_input' }
    senhaValue = () => { return 'secret_sauce' }

    btnLogin = () => { return '#login-button' }

    mensagemSenhaNecessaria = () => { return '.error-message-container.error' }
    mensagemSenhaNecessariaValue = () => { return 'Epic sadface: Password is required' }
    mensagemuserBloqueado = () => { return '.error-message-container.error' }
    mensagemuserBloqueadoValue = () => { return 'Epic sadface: Sorry, this user has been locked out.' }
    mensagemuserNecessaria = () => { return '.error-message-container.error' }
    mensagemuserNecessariaValue = () => { return 'Epic sadface: Username is required' }
    mensagemcomSucesso = () => { return '' }
    mensagemcomSucessoValue = () => { return '' }
}

export default LoginElements;