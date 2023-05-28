export default function General({
  onChange,
  user,
}: {
  onChange: any;
  user: any;
}) {
  return (
    <div className="general-container block">
      <h2>General Information</h2>
      <input
        type="text"
        id="title"
        name="title"
        placeholder="Title"
        value={user.title}
        onChange={onChange}
        maxLength={30}
        minLength={3}
      />

      <input
        type="text"
        id="fname"
        name="fName"
        placeholder="First Name"
        value={user.fName}
        onChange={onChange}
        maxLength={20}
        minLength={1}
      />

      <input
        type="text"
        id="lname"
        name="lName"
        placeholder="Last Name"
        value={user.lName}
        onChange={onChange}
        maxLength={20}
        minLength={1}
      />

      <input
        type="text"
        id="address"
        name="address"
        value={user.address}
        onChange={onChange}
        placeholder="Address"
      />

      <input
        type="tel"
        id="phone"
        name="phone"
        value={user.phone}
        onChange={onChange}
        placeholder="Phone Number"
      />

      <input
        type="email"
        id="email"
        name="email"
        value={user.email}
        onChange={onChange}
        placeholder="Email"
      />

      <textarea
        id="description"
        name="description"
        value={user.description}
        onChange={onChange}
        cols={30}
        rows={3}
        maxLength={300}
        placeholder="Write more about yourself!"
      ></textarea>

      <label htmlFor="photo">Add Photo</label>
      <input type="file" name="photo" id="photo" onChange={onChange} />
    </div>
  );
}
