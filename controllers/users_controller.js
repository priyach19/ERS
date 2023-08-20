const Review = require('../models/review');
const User = require('../models/user');

// Render the sign in page
module.exports.login = (req, res) => {
  if (req.isAuthenticated()) {
    if (req.user.role === 'admin') {
      return res.redirect('/admin-dashboard');
    }
    // if user is not admin
    return res.redirect(`employee-dashboard/${req.user.id}`);
  }
  return res.render('login', {
    title: 'Review system | Login',
  });
};

// Render the sign up page
module.exports.register = (req, res) => {
  if (req.isAuthenticated()) {
    if (req.user.role === 'admin') {
      return res.redirect('/admin-dashboard');
    }
    return res.redirect(`employee-dashboard/${req.user.id}`);
  }
  return res.render('register', {
    title: 'Review system | Register',
  });
};

// Render add employee page
module.exports.addEmployee = (req, res) => {
  if (req.isAuthenticated()) {
    if (req.user.role === 'admin') {
      return res.render('addEmployee', {
        title: 'Add Employee ',
      });
    }
  }
  return res.redirect('/');
};

// Render edit employee page
module.exports.editEmployee = async (req, res) => {
  try {
    if (req.isAuthenticated()) {
      if (req.user.role === 'admin') {
        // populate employee with all the reviews (feedback) given by other users
        const employee = await User.findById(req.params.id).populate({
          path: 'reviewsFromOthers',
          populate: {
            path: 'reviewer',
            model: 'User',
          },
        });
        // extracting reviews given by others from employee variable
        const reviewsFromOthers = employee.reviewsFromOthers;
        return res.render('edit_employee', {
          title: 'Edit Employee',
          employee,
          reviewsFromOthers,
        });
      }
    }
    return res.redirect('/');
  } catch (err) {
    console.log('error', err);
    return res.redirect('back');
  }
};

// Get sign up data
module.exports.create = async (req, res) => {
  try {
    const { username, email, password, confirm_password, role } = req.body;
    // if password doesn't match
    if (password != confirm_password) {
      req.flash('error', 'Password and Confirm password are not same');
      return res.redirect('back');
    }
    // check if user already exist
    const user= await User.findOne({ email:email }) 
      // if user not found in db create one
    if (user) {
        req.flash('err','user already present!')
        return res.redirect("back")
    }else{
        await User.create(
          {
            email,
            password,
            username,
            role,
          });
        req.flash('user created successfully!')
        return res.redirect('/');
    
      } 
    
  } catch (err) {
    console.log('error', err);
    return res.redirect('back');
  }
};

// Add an employee
module.exports.createEmployee = async (req, res) => {
  try {
    const { username, email, password, confirm_password } = req.body;

    // if password doesn't match
    if (password != confirm_password) {
      req.flash('error', 'Password and Confirm password are not same');
      return res.redirect('back');
    }
    // check if user already exist
    const user= await User.findOne({ email:email })
      // if user not found in db create one
      if (!user) {
        await User.create(
          {
            email,
            password,
            username,
          });
          
            req.flash('success', 'Employee added!');
            return res.redirect('back');
      } else {
        req.flash('error', 'Employee already registered!');
        return res.redirect('back');
      }
   
  } catch (err) {
    console.log('error', err);
    return res.redirect('back');
  }
};

// Update employee details
module.exports.updateEmployee = async (req, res) => {
  try {
    const employee = await User.findById(req.params.id);
    const { username, role } = req.body;

    if (!employee) {
      req.flash('error', 'employee does not exist!');
      return res.redirect('back');
    }

    // update data coming from req.body
    employee.username = username;
    employee.role = role;
    employee.save(); // save the updated data

    req.flash('success', 'Employee details updated!');
    return res.redirect('back');
  } catch (err) {
    console.log('error', err);
    return res.redirect('back');
  }
};

// Delete an user
module.exports.destroy = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);

    // delete all the reviews in which this user is a recipient
    await Review.deleteMany({ recipient: id });

    // delete all the reviews in which this user is a reviewer
    await Review.deleteMany({ reviewer: id });

    // delete this user
    await User.findByIdAndDelete(id);

    req.flash('success', `User and associated reviews deleted!`);
    return res.redirect('back');
  } catch (err) {
    console.log('error', err);
    return res.redirect('back');
  }
};

// Sign in and create a session for the user
module.exports.createSession = (req, res) => {
  req.flash('success', 'Logged in successfully');
  if (req.user.role === 'admin') {
    return res.redirect('/admin-dashboard');
  }
  // if user is not admin it will redirect to employee page
  return res.redirect(`/employee-dashboard/${req.user.id}`);
};
//change password
module.exports.forgetPass = function (req, res) {
  try {
    return res.render("forgetPassword",{
      title:"Forget Password"
    });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports.changePass = async function (req, res) {
  const user = User.findOne({ email: req.body.email });
  if (!user) {
    return res.redirect("/register");
  }
  if (req.body.password == req.body.confirm_password) {
    user.password = req.body.password;
    await user.updateOne({ password: req.body.password });
    req.flash('success', 'Password is updated!');
    return res.redirect("/");
    
  }
  return res.redirect("back");
};

// Clear the cookie
module.exports.destroySession = (req, res) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    req.flash('success', 'Logged out successfully!');
    return res.redirect('/');
  });
};