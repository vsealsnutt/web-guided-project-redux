import React from 'react';
import DragonMember from './DragonMember';
import { addMember, updateNewMember } from '../actions/dragonListActions';
import { connect } from 'react-redux';

class DragonList extends React.Component {

  handleClick = () => {
    const newMember = { name: this.props.newMember, dragonStatus: true }
    this.props.addMember(newMember);
  }

   render() {
    return (
      <div>
        <div className="friends-list">
          {this.props.members.map((member, index) => (
            <DragonMember key={index} member={member}/>
          ))}
        </div>
        <input
          type="text"
          value={this.props.newMember}
          onChange={(e) => this.props.updateNewMember(e.target.value)}
          placeholder="Add new member"
        />
        <button onClick={this.handleClick}>Add member</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    members: state.DragonList.members,
    newMember: state.DragonList.newMember
  }
}

export default connect(mapStateToProps, {updateNewMember, addMember})(DragonList);
