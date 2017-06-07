'use strict'
import express from 'express';
import authController from '../controllers/auth.controller';
import authMiddleware from '../middlewares/auth.middleware';

const auth = express.Router();

auth.post('/login', authController.login);
auth.post('/register', authMiddleware.validateRegister, authController.register);
auth.post('/activate-account', authMiddleware.validateActivationAccount, authController.activateAccount);
auth.post('/send-token-to-reset-password', authMiddleware.validateIsEmail, authController.sendTokenToResetPassword);
auth.post('/validate-key-to-reset-password', authMiddleware.validateGenerateKeyToResetPassword, authController.validateKeyToResetPassword);
auth.post('/new-password', authMiddleware.validateNewPassword, authController.setNewPassword)

module.exports = auth;