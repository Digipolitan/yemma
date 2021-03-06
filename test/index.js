const mongoose = require('mongoose');
const Mockgoose = require('mockgoose').Mockgoose;

const mockgoose = new Mockgoose(mongoose);
mockgoose.helper.setDbVersion('3.2.1'); // Temporary workaround to fix CI hanging up cf. https://github.com/Mockgoose/Mockgoose/issues/36

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
const should = chai.should();

