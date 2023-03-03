import React, { useState } from 'react'
import useInput from '../../../hooks/useInput';
import './registration.css'

function Registration() {
    const [box, setBox] = useState('');
    const inpFirstName = useInput('', true);
    const inpLastName = useInput('', true);
    const inpID = useInput('', true);
    const inpEmail = useInput('', true);
    const inpPhone = useInput('', true);
    const inpLang = useInput('', true);
    const inpMaterials = useInput('', true);
    const inpReserve = useInput('', true);
    const inpDistricts = useInput('', true);
    const inpTypesOfJobs = useInput('', true);
    const inpComments = useInput('', true);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(
            inpFirstName.value + "\n" + inpLastName.value + "\n" + 
            inpID.value + "\n" + inpEmail.value  + "\n" + inpPhone.value + "\n" +
            inpLang.value + "\n" + inpMaterials.value + "\n" + inpReserve.value + "\n" + 
            inpDistricts.value + "\n" + inpTypesOfJobs.value + "\n" + inpComments.value + "\n" + box
        );
    };

    return ( 
        <div className='container'>
            <form onSubmit={handleSubmit} className="form">
                <p>Анкета</p>
                <p>Заполните анкету, чтобы вашим будущим клиентам было легко вас найти</p>
                <ul>
                    <li>
                        <div>
                            <div className='column'>
                                <label>Имя</label>
                                <input {...inpFirstName} type="text"/>
                            </div>
                            <div className='column'>
                                <label>Фамилия</label>
                                <input {...inpLastName} type="text"/>
                            </div>
                        </div>
                    </li>
                    <li>
                        <label>Фамилия</label>
                        <input {...inpLastName} type="text"/>
                    </li>
                    <li>
                        <label>Теудат Зеут*</label>
                        <input {...inpID} type="number"/>
                    </li>
                    <li>
                        <label>E-mail</label>
                        <input {...inpEmail} type="email"/>
                    </li>
                    <li>
                        <label>Телефон*</label>
                        <input {...inpPhone} type="number"/>
                    </li>
                    <li>
                        <label>Язык общения</label>
                        <input {...inpLang} type="select"/>
                    </li>
                    <li>
                        <label>Расходники</label>
                        <input {...inpMaterials} type="select"/>
                    </li>
                    <li>
                        {/* checkbox */}
                        <label>Резерв</label>
                        <input {...inpReserve} type="select"/>
                    </li>
                    <li>
                        {/* checkbox */}
                        <label>Районы</label>
                        <input {...inpDistricts} type="select"/>
                    </li>
                    <li>
                        {/* checkbox */}
                        <label>Виды работ</label>
                        <input {...inpTypesOfJobs} type="select"/>
                    </li>
                    <li>
                        <label>Комментарии</label>
                        <input {...inpComments} type="text"/>
                        <p>* эти данные не видны клиенту до заключения вами договора</p> 
                    </li>
                    <li>
                        <label className='pupil'>Is pupil</label>
                        <input 
                            type='checkbox'
                            onChange={(e) => setBox(e.target.checked)}
                            required
                        />
                    </li>
                </ul>
                
                <button>submit</button>
            </form>
        </div>
     );
}

export default Registration;