export default function (result) {
  const p = result.additionalUserInfo.profile;
  return {
    fullName: p.name,
    picture: p.picture,
    token: result.credential.accessToken,
  };
}
