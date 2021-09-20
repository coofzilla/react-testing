//file named this way because jest looking for a file with this name inside src directory
//if finds, will execute it before anything else
//enzyme doesn't support 17 yet so this is the solution
import Enzyme from "enzyme";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });
