function Footer() {

    const printYear = new Date().getFullYear()

    return (
        <footer className="footer p-5 bg-gray-700 text-primary-content footer-center">
            <div className="">
                <p>Copyright &copy; {printYear}. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer
