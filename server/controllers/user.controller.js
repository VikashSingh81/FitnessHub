const User = require("../models/User");

// GET PROFILE
exports.getProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select("-password");
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// UPDATE PROFILE
exports.updateProfile = async (req, res) => {
    try {

        const {
            fullName,
            age,
            gender,
            height,
            weight,
            goal
        } = req.body;

        const user = await User.findByIdAndUpdate(
            req.user.id,
            {
                fullName,
                age,
                gender,
                height,
                weight,
                goal
            },
            { new: true }
        ).select("-password");

        res.json({
            success: true,
            message: "Profile Updated Successfully",
            user
        });

    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
};