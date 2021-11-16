const withAuth = (req, res, next0 => {
    if (!req.session.user_id) {
        res.redirect('/login');
    } else {
        next0();
    }
});

module.exports = withAuth;