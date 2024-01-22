import { FormNewPassword } from '../components/FormNewPassword/FormNewPassword';
import { FirstScreen } from '../components/FirstScreen/FirstScreen';
import { Form } from '../components/UI/Form/Form';

export const NewPassword = () => {

    return (
        <FirstScreen>
            <Form>
                <FormNewPassword/>
            </Form>
        </FirstScreen>
    
    )
}
