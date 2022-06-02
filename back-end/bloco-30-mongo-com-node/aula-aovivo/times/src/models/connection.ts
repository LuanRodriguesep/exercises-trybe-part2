import { connect } from "mongoose";

const createConnection = (url: string = 'mongodb://localhost:27017/futebol_example') => connect(url)

export default createConnection;