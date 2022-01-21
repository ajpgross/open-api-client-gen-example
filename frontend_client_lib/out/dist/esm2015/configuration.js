export class Configuration {
    constructor(configurationParameters = {}) {
        this.apiKeys = configurationParameters.apiKeys;
        this.username = configurationParameters.username;
        this.password = configurationParameters.password;
        this.accessToken = configurationParameters.accessToken;
        this.basePath = configurationParameters.basePath;
        this.withCredentials = configurationParameters.withCredentials;
        this.encoder = configurationParameters.encoder;
        if (configurationParameters.credentials) {
            this.credentials = configurationParameters.credentials;
        }
        else {
            this.credentials = {};
        }
        // init default api_key credential
        if (!this.credentials['api_key']) {
            this.credentials['api_key'] = () => {
                if (this.apiKeys === null || this.apiKeys === undefined) {
                    return undefined;
                }
                else {
                    return this.apiKeys['api_key'] || this.apiKeys['api_key'];
                }
            };
        }
        // init default petstore_auth credential
        if (!this.credentials['petstore_auth']) {
            this.credentials['petstore_auth'] = () => {
                return typeof this.accessToken === 'function'
                    ? this.accessToken()
                    : this.accessToken;
            };
        }
    }
    /**
     * Select the correct content-type to use for a request.
     * Uses {@link Configuration#isJsonMime} to determine the correct content-type.
     * If no content type is found return the first found type if the contentTypes is not empty
     * @param contentTypes - the array of content types that are available for selection
     * @returns the selected content-type or <code>undefined</code> if no selection could be made.
     */
    selectHeaderContentType(contentTypes) {
        if (contentTypes.length === 0) {
            return undefined;
        }
        const type = contentTypes.find((x) => this.isJsonMime(x));
        if (type === undefined) {
            return contentTypes[0];
        }
        return type;
    }
    /**
     * Select the correct accept content-type to use for a request.
     * Uses {@link Configuration#isJsonMime} to determine the correct accept content-type.
     * If no content type is found return the first found type if the contentTypes is not empty
     * @param accepts - the array of content types that are available for selection.
     * @returns the selected content-type or <code>undefined</code> if no selection could be made.
     */
    selectHeaderAccept(accepts) {
        if (accepts.length === 0) {
            return undefined;
        }
        const type = accepts.find((x) => this.isJsonMime(x));
        if (type === undefined) {
            return accepts[0];
        }
        return type;
    }
    /**
     * Check if the given MIME is a JSON MIME.
     * JSON MIME examples:
     *   application/json
     *   application/json; charset=UTF8
     *   APPLICATION/JSON
     *   application/vnd.company+json
     * @param mime - MIME (Multipurpose Internet Mail Extensions)
     * @return True if the given MIME is JSON, false otherwise.
     */
    isJsonMime(mime) {
        const jsonMime = new RegExp('^(application\/json|[^;/ \t]+\/[^;/ \t]+[+]json)[ \t]*(;.*)?$', 'i');
        return mime !== null && (jsonMime.test(mime) || mime.toLowerCase() === 'application/json-patch+json');
    }
    lookupCredential(key) {
        const value = this.credentials[key];
        return typeof value === 'function'
            ? value()
            : value;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2NvbmZpZ3VyYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0JBLE1BQU0sT0FBTyxhQUFhO0lBcUJ0QixZQUFZLDBCQUFtRCxFQUFFO1FBQzdELElBQUksQ0FBQyxPQUFPLEdBQUcsdUJBQXVCLENBQUMsT0FBTyxDQUFDO1FBQy9DLElBQUksQ0FBQyxRQUFRLEdBQUcsdUJBQXVCLENBQUMsUUFBUSxDQUFDO1FBQ2pELElBQUksQ0FBQyxRQUFRLEdBQUcsdUJBQXVCLENBQUMsUUFBUSxDQUFDO1FBQ2pELElBQUksQ0FBQyxXQUFXLEdBQUcsdUJBQXVCLENBQUMsV0FBVyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxRQUFRLEdBQUcsdUJBQXVCLENBQUMsUUFBUSxDQUFDO1FBQ2pELElBQUksQ0FBQyxlQUFlLEdBQUcsdUJBQXVCLENBQUMsZUFBZSxDQUFDO1FBQy9ELElBQUksQ0FBQyxPQUFPLEdBQUcsdUJBQXVCLENBQUMsT0FBTyxDQUFDO1FBQy9DLElBQUksdUJBQXVCLENBQUMsV0FBVyxFQUFFO1lBQ3JDLElBQUksQ0FBQyxXQUFXLEdBQUcsdUJBQXVCLENBQUMsV0FBVyxDQUFDO1NBQzFEO2FBQ0k7WUFDRCxJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztTQUN6QjtRQUVELGtDQUFrQztRQUNsQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUM5QixJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEdBQUcsRUFBRTtnQkFDL0IsSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLElBQUksSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLFNBQVMsRUFBRTtvQkFDckQsT0FBTyxTQUFTLENBQUM7aUJBQ3BCO3FCQUFNO29CQUNILE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2lCQUM3RDtZQUNMLENBQUMsQ0FBQztTQUNMO1FBRUQsd0NBQXdDO1FBQ3hDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxFQUFFO1lBQ3BDLElBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLEdBQUcsR0FBRyxFQUFFO2dCQUNyQyxPQUFPLE9BQU8sSUFBSSxDQUFDLFdBQVcsS0FBSyxVQUFVO29CQUN6QyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtvQkFDcEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7WUFDM0IsQ0FBQyxDQUFDO1NBQ0w7SUFDTCxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0ksdUJBQXVCLENBQUUsWUFBc0I7UUFDbEQsSUFBSSxZQUFZLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUMzQixPQUFPLFNBQVMsQ0FBQztTQUNwQjtRQUVELE1BQU0sSUFBSSxHQUFHLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFTLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsRSxJQUFJLElBQUksS0FBSyxTQUFTLEVBQUU7WUFDcEIsT0FBTyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDMUI7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0ksa0JBQWtCLENBQUMsT0FBaUI7UUFDdkMsSUFBSSxPQUFPLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUN0QixPQUFPLFNBQVMsQ0FBQztTQUNwQjtRQUVELE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFTLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM3RCxJQUFJLElBQUksS0FBSyxTQUFTLEVBQUU7WUFDcEIsT0FBTyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDckI7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQ7Ozs7Ozs7OztPQVNHO0lBQ0ksVUFBVSxDQUFDLElBQVk7UUFDMUIsTUFBTSxRQUFRLEdBQVcsSUFBSSxNQUFNLENBQUMsK0RBQStELEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDMUcsT0FBTyxJQUFJLEtBQUssSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFLEtBQUssNkJBQTZCLENBQUMsQ0FBQztJQUMxRyxDQUFDO0lBRU0sZ0JBQWdCLENBQUMsR0FBVztRQUMvQixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3BDLE9BQU8sT0FBTyxLQUFLLEtBQUssVUFBVTtZQUM5QixDQUFDLENBQUMsS0FBSyxFQUFFO1lBQ1QsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUNoQixDQUFDO0NBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwUGFyYW1ldGVyQ29kZWMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29uZmlndXJhdGlvblBhcmFtZXRlcnMge1xuICAgIC8qKlxuICAgICAqICBAZGVwcmVjYXRlZCBTaW5jZSA1LjAuIFVzZSBjcmVkZW50aWFscyBpbnN0ZWFkXG4gICAgICovXG4gICAgYXBpS2V5cz86IHtbIGtleTogc3RyaW5nIF06IHN0cmluZ307XG4gICAgdXNlcm5hbWU/OiBzdHJpbmc7XG4gICAgcGFzc3dvcmQ/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogIEBkZXByZWNhdGVkIFNpbmNlIDUuMC4gVXNlIGNyZWRlbnRpYWxzIGluc3RlYWRcbiAgICAgKi9cbiAgICBhY2Nlc3NUb2tlbj86IHN0cmluZyB8ICgoKSA9PiBzdHJpbmcpO1xuICAgIGJhc2VQYXRoPzogc3RyaW5nO1xuICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG4gICAgZW5jb2Rlcj86IEh0dHBQYXJhbWV0ZXJDb2RlYztcbiAgICAvKipcbiAgICAgKiBUaGUga2V5cyBhcmUgdGhlIG5hbWVzIGluIHRoZSBzZWN1cml0eVNjaGVtZXMgc2VjdGlvbiBvZiB0aGUgT3BlbkFQSVxuICAgICAqIGRvY3VtZW50LiBUaGV5IHNob3VsZCBtYXAgdG8gdGhlIHZhbHVlIHVzZWQgZm9yIGF1dGhlbnRpY2F0aW9uXG4gICAgICogbWludXMgYW55IHN0YW5kYXJkIHByZWZpeGVzIHN1Y2ggYXMgJ0Jhc2ljJyBvciAnQmVhcmVyJy5cbiAgICAgKi9cbiAgICBjcmVkZW50aWFscz86IHtbIGtleTogc3RyaW5nIF06IHN0cmluZyB8ICgoKSA9PiBzdHJpbmcgfCB1bmRlZmluZWQpfTtcbn1cblxuZXhwb3J0IGNsYXNzIENvbmZpZ3VyYXRpb24ge1xuICAgIC8qKlxuICAgICAqICBAZGVwcmVjYXRlZCBTaW5jZSA1LjAuIFVzZSBjcmVkZW50aWFscyBpbnN0ZWFkXG4gICAgICovXG4gICAgYXBpS2V5cz86IHtbIGtleTogc3RyaW5nIF06IHN0cmluZ307XG4gICAgdXNlcm5hbWU/OiBzdHJpbmc7XG4gICAgcGFzc3dvcmQ/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogIEBkZXByZWNhdGVkIFNpbmNlIDUuMC4gVXNlIGNyZWRlbnRpYWxzIGluc3RlYWRcbiAgICAgKi9cbiAgICBhY2Nlc3NUb2tlbj86IHN0cmluZyB8ICgoKSA9PiBzdHJpbmcpO1xuICAgIGJhc2VQYXRoPzogc3RyaW5nO1xuICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG4gICAgZW5jb2Rlcj86IEh0dHBQYXJhbWV0ZXJDb2RlYztcbiAgICAvKipcbiAgICAgKiBUaGUga2V5cyBhcmUgdGhlIG5hbWVzIGluIHRoZSBzZWN1cml0eVNjaGVtZXMgc2VjdGlvbiBvZiB0aGUgT3BlbkFQSVxuICAgICAqIGRvY3VtZW50LiBUaGV5IHNob3VsZCBtYXAgdG8gdGhlIHZhbHVlIHVzZWQgZm9yIGF1dGhlbnRpY2F0aW9uXG4gICAgICogbWludXMgYW55IHN0YW5kYXJkIHByZWZpeGVzIHN1Y2ggYXMgJ0Jhc2ljJyBvciAnQmVhcmVyJy5cbiAgICAgKi9cbiAgICBjcmVkZW50aWFsczoge1sga2V5OiBzdHJpbmcgXTogc3RyaW5nIHwgKCgpID0+IHN0cmluZyB8IHVuZGVmaW5lZCl9O1xuXG4gICAgY29uc3RydWN0b3IoY29uZmlndXJhdGlvblBhcmFtZXRlcnM6IENvbmZpZ3VyYXRpb25QYXJhbWV0ZXJzID0ge30pIHtcbiAgICAgICAgdGhpcy5hcGlLZXlzID0gY29uZmlndXJhdGlvblBhcmFtZXRlcnMuYXBpS2V5cztcbiAgICAgICAgdGhpcy51c2VybmFtZSA9IGNvbmZpZ3VyYXRpb25QYXJhbWV0ZXJzLnVzZXJuYW1lO1xuICAgICAgICB0aGlzLnBhc3N3b3JkID0gY29uZmlndXJhdGlvblBhcmFtZXRlcnMucGFzc3dvcmQ7XG4gICAgICAgIHRoaXMuYWNjZXNzVG9rZW4gPSBjb25maWd1cmF0aW9uUGFyYW1ldGVycy5hY2Nlc3NUb2tlbjtcbiAgICAgICAgdGhpcy5iYXNlUGF0aCA9IGNvbmZpZ3VyYXRpb25QYXJhbWV0ZXJzLmJhc2VQYXRoO1xuICAgICAgICB0aGlzLndpdGhDcmVkZW50aWFscyA9IGNvbmZpZ3VyYXRpb25QYXJhbWV0ZXJzLndpdGhDcmVkZW50aWFscztcbiAgICAgICAgdGhpcy5lbmNvZGVyID0gY29uZmlndXJhdGlvblBhcmFtZXRlcnMuZW5jb2RlcjtcbiAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb25QYXJhbWV0ZXJzLmNyZWRlbnRpYWxzKSB7XG4gICAgICAgICAgICB0aGlzLmNyZWRlbnRpYWxzID0gY29uZmlndXJhdGlvblBhcmFtZXRlcnMuY3JlZGVudGlhbHM7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNyZWRlbnRpYWxzID0ge307XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpbml0IGRlZmF1bHQgYXBpX2tleSBjcmVkZW50aWFsXG4gICAgICAgIGlmICghdGhpcy5jcmVkZW50aWFsc1snYXBpX2tleSddKSB7XG4gICAgICAgICAgICB0aGlzLmNyZWRlbnRpYWxzWydhcGlfa2V5J10gPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYXBpS2V5cyA9PT0gbnVsbCB8fCB0aGlzLmFwaUtleXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmFwaUtleXNbJ2FwaV9rZXknXSB8fCB0aGlzLmFwaUtleXNbJ2FwaV9rZXknXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaW5pdCBkZWZhdWx0IHBldHN0b3JlX2F1dGggY3JlZGVudGlhbFxuICAgICAgICBpZiAoIXRoaXMuY3JlZGVudGlhbHNbJ3BldHN0b3JlX2F1dGgnXSkge1xuICAgICAgICAgICAgdGhpcy5jcmVkZW50aWFsc1sncGV0c3RvcmVfYXV0aCddID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB0eXBlb2YgdGhpcy5hY2Nlc3NUb2tlbiA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgICAgICAgICA/IHRoaXMuYWNjZXNzVG9rZW4oKVxuICAgICAgICAgICAgICAgICAgICA6IHRoaXMuYWNjZXNzVG9rZW47XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VsZWN0IHRoZSBjb3JyZWN0IGNvbnRlbnQtdHlwZSB0byB1c2UgZm9yIGEgcmVxdWVzdC5cbiAgICAgKiBVc2VzIHtAbGluayBDb25maWd1cmF0aW9uI2lzSnNvbk1pbWV9IHRvIGRldGVybWluZSB0aGUgY29ycmVjdCBjb250ZW50LXR5cGUuXG4gICAgICogSWYgbm8gY29udGVudCB0eXBlIGlzIGZvdW5kIHJldHVybiB0aGUgZmlyc3QgZm91bmQgdHlwZSBpZiB0aGUgY29udGVudFR5cGVzIGlzIG5vdCBlbXB0eVxuICAgICAqIEBwYXJhbSBjb250ZW50VHlwZXMgLSB0aGUgYXJyYXkgb2YgY29udGVudCB0eXBlcyB0aGF0IGFyZSBhdmFpbGFibGUgZm9yIHNlbGVjdGlvblxuICAgICAqIEByZXR1cm5zIHRoZSBzZWxlY3RlZCBjb250ZW50LXR5cGUgb3IgPGNvZGU+dW5kZWZpbmVkPC9jb2RlPiBpZiBubyBzZWxlY3Rpb24gY291bGQgYmUgbWFkZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgc2VsZWN0SGVhZGVyQ29udGVudFR5cGUgKGNvbnRlbnRUeXBlczogc3RyaW5nW10pOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoY29udGVudFR5cGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHR5cGUgPSBjb250ZW50VHlwZXMuZmluZCgoeDogc3RyaW5nKSA9PiB0aGlzLmlzSnNvbk1pbWUoeCkpO1xuICAgICAgICBpZiAodHlwZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gY29udGVudFR5cGVzWzBdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0eXBlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlbGVjdCB0aGUgY29ycmVjdCBhY2NlcHQgY29udGVudC10eXBlIHRvIHVzZSBmb3IgYSByZXF1ZXN0LlxuICAgICAqIFVzZXMge0BsaW5rIENvbmZpZ3VyYXRpb24jaXNKc29uTWltZX0gdG8gZGV0ZXJtaW5lIHRoZSBjb3JyZWN0IGFjY2VwdCBjb250ZW50LXR5cGUuXG4gICAgICogSWYgbm8gY29udGVudCB0eXBlIGlzIGZvdW5kIHJldHVybiB0aGUgZmlyc3QgZm91bmQgdHlwZSBpZiB0aGUgY29udGVudFR5cGVzIGlzIG5vdCBlbXB0eVxuICAgICAqIEBwYXJhbSBhY2NlcHRzIC0gdGhlIGFycmF5IG9mIGNvbnRlbnQgdHlwZXMgdGhhdCBhcmUgYXZhaWxhYmxlIGZvciBzZWxlY3Rpb24uXG4gICAgICogQHJldHVybnMgdGhlIHNlbGVjdGVkIGNvbnRlbnQtdHlwZSBvciA8Y29kZT51bmRlZmluZWQ8L2NvZGU+IGlmIG5vIHNlbGVjdGlvbiBjb3VsZCBiZSBtYWRlLlxuICAgICAqL1xuICAgIHB1YmxpYyBzZWxlY3RIZWFkZXJBY2NlcHQoYWNjZXB0czogc3RyaW5nW10pOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoYWNjZXB0cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0eXBlID0gYWNjZXB0cy5maW5kKCh4OiBzdHJpbmcpID0+IHRoaXMuaXNKc29uTWltZSh4KSk7XG4gICAgICAgIGlmICh0eXBlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBhY2NlcHRzWzBdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0eXBlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIHRoZSBnaXZlbiBNSU1FIGlzIGEgSlNPTiBNSU1FLlxuICAgICAqIEpTT04gTUlNRSBleGFtcGxlczpcbiAgICAgKiAgIGFwcGxpY2F0aW9uL2pzb25cbiAgICAgKiAgIGFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGOFxuICAgICAqICAgQVBQTElDQVRJT04vSlNPTlxuICAgICAqICAgYXBwbGljYXRpb24vdm5kLmNvbXBhbnkranNvblxuICAgICAqIEBwYXJhbSBtaW1lIC0gTUlNRSAoTXVsdGlwdXJwb3NlIEludGVybmV0IE1haWwgRXh0ZW5zaW9ucylcbiAgICAgKiBAcmV0dXJuIFRydWUgaWYgdGhlIGdpdmVuIE1JTUUgaXMgSlNPTiwgZmFsc2Ugb3RoZXJ3aXNlLlxuICAgICAqL1xuICAgIHB1YmxpYyBpc0pzb25NaW1lKG1pbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCBqc29uTWltZTogUmVnRXhwID0gbmV3IFJlZ0V4cCgnXihhcHBsaWNhdGlvblxcL2pzb258W147LyBcXHRdK1xcL1teOy8gXFx0XStbK11qc29uKVsgXFx0XSooOy4qKT8kJywgJ2knKTtcbiAgICAgICAgcmV0dXJuIG1pbWUgIT09IG51bGwgJiYgKGpzb25NaW1lLnRlc3QobWltZSkgfHwgbWltZS50b0xvd2VyQ2FzZSgpID09PSAnYXBwbGljYXRpb24vanNvbi1wYXRjaCtqc29uJyk7XG4gICAgfVxuXG4gICAgcHVibGljIGxvb2t1cENyZWRlbnRpYWwoa2V5OiBzdHJpbmcpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuY3JlZGVudGlhbHNba2V5XTtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgPyB2YWx1ZSgpXG4gICAgICAgICAgICA6IHZhbHVlO1xuICAgIH1cbn1cbiJdfQ==