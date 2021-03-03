module.exports.transformThirdPartyProjects = (projects) => {
    return projects._doc;
};
module.exports.transformQueryParamsToOpts = (query) => {
    const opts = { ...query };
    delete opts.projectId;
    delete opts.userId;
    return {
        ...opts,
        categoryId: query.categoryId ? query.categoryId : '',
        startAt: query.startAt ? query.startAt : 0,
        maxResults: query.maxResults ? query.maxResults : 50,
    };
};

module.exports.transformBody = (body) => {
    body.organization_slug = body.thirdPartyProject.organizationId;
    body.project_slug = body.thirdPartyProject.projectId;
    delete body.thirdPartyProject;

    body.id = `id=${body.id.join('&id=')}`;

    if (body.status === 'FIXED') body.status = 'resolved';
    else if (body.status === 'OPEN') body.status = 'unresolved';
    else body.status = 'ignored';

    if (!body.hasSeen) body.hasSeen = true;
    return body;
};
