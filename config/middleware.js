// middleware to set notification  for the user through flash library
module.exports.setFlash = function (req, res, next) {
    res.locals.flash = {
      success: req.flash('success'),
      error: req.flash('error'),
    };
  
    next();
  };