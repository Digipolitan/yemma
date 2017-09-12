
export abstract class APIService {

  public static buildPath(path: [String]) {
    const location = window.location;
    return `${location.protocol}//${location.hostname}:9000/${path.join('/')}`;
  }
}
