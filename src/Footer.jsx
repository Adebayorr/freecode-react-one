const Footer = () => {
    const date = new Date()
    return ( 
        <footer>
            <h5>Team Member Allocation App - {date.getFullYear()}</h5>
        </footer>
     );
}
 
export default Footer;