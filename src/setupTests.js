//file named this way because jest looking for a file with this name inside src directory
//if finds, will execute it before anything else
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-17";

Enzyme.configure({ adapter: new Adapter() });
