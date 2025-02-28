function blockDesktop() {
	if (window.innerWidth > 767) {
		const mensagem = (
			<h1 className="text-2xl text-center flex items-center justify-center min-h-screen">
				Vai ver esse contúdo no celular, não tive tempo pra fazer a
				responsividade direito 😡😡
			</h1>
		);
		return mensagem;
	}
	return false;
}

export default blockDesktop;