import React from 'react';

const ToDo = () => {

    const handleCheckbox = e => {
        console.log('hiiiii')
    }
    return (
        <div class="overflow-x-auto">
            <table class="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Task done</th>
                        <th>Tasks</th>
                        <th>Edite</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>1</th>
                        <td>
                            <div class="form-control">
                                <label class="label cursor-pointer">
                                    <input type="checkbox" unselectable class="checkbox checkbox-accent" />
                                </label>
                            </div>
                        </td>
                        <td>Cy Ganderton</td>
                        <td><button className='btn btn-sm bg-red-500 '>edite</button></td>

                    </tr>

                </tbody>
            </table>
        </div>
    );
};

export default ToDo;